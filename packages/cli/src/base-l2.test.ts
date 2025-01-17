import { Connection } from '@celo/connect'
import { testWithAnvilL2 } from '@celo/dev-utils/lib/anvil-test'
import { Config, ux } from '@oclif/core'
import Web3 from 'web3'
import { BaseCommand } from './base'
import CustomHelp from './help'
import { stripAnsiCodesFromNestedArray, testLocallyWithWeb3Node } from './test-utils/cliUtils'

process.env.NO_SYNCCHECK = 'true'

// doesnt use anvil because we are testing the connection to chain
// doesnt use testLocally because that messes with the node connection
describe('flags', () => {
  let config: Config
  class BasicCommand extends BaseCommand {
    async run() {
      console.log('Hello, world!')
    }
  }
  beforeEach(async () => {
    // copied from Commaand.run to load config
    config = await Config.load(require.main?.filename || __dirname)
  })
  describe('--node  alfajores', () => {
    it('it connects to 44787', async () => {
      const command = new BasicCommand(['--node', 'alfajores'], config)
      const runnerWeb3 = await command.getWeb3()
      const connectdChain = await runnerWeb3.eth.getChainId()
      expect(connectdChain).toBe(44787)
    })
  })
  describe('--node  celo', () => {
    it('it connects to 42220', async () => {
      const command = new BasicCommand(['--node', 'celo'], config)
      const runnerWeb3 = await command.getWeb3()
      const connectdChain = await runnerWeb3.eth.getChainId()
      expect(connectdChain).toBe(42220)
    })
  })
  describe('--help', () => {
    it('it shows help', async () => {
      const writeSpy = jest.spyOn(ux.write, 'stdout')
      const help = new CustomHelp(config)
      // transfer:celo could be ANY command --help is the important part
      await help.showHelp(['transfer:celo', '--help'])
      expect(stripAnsiCodesFromNestedArray(writeSpy.mock.calls)).toHaveLength(3)
      expect(stripAnsiCodesFromNestedArray(writeSpy.mock.calls)[1][0]).toEqual(
        expect.stringContaining(`-n, --node=<value>`)
      )
    })
  })
})

testWithAnvilL2('BaseCommand', (web3: Web3) => {
  it('logs command execution error', async () => {
    class TestErrorCommand extends BaseCommand {
      async run() {
        throw new Error('test error')
      }
    }

    const errorSpy = jest.spyOn(console, 'error')

    await expect(testLocallyWithWeb3Node(TestErrorCommand, [], web3)).rejects.toThrow()

    expect(errorSpy.mock.calls).toMatchInlineSnapshot(`
      [
        [
          "
      Received an error during command execution, if you believe this is a bug you can create an issue here: 
                  
      https://github.com/celo-org/developer-tooling/issues/new?assignees=&labels=bug+report&projects=&template=BUG-FORM.yml

      ",
          [Error: test error],
        ],
      ]
    `)
  })

  it('logs connection close error', async () => {
    class TestConnectionStopErrorCommand extends BaseCommand {
      async run() {
        console.log('Successful run')
      }
    }

    const writeMock = jest.spyOn(ux.write, 'stdout')
    const logSpy = jest.spyOn(console, 'log')
    const errorSpy = jest.spyOn(console, 'error')

    jest.spyOn(Connection.prototype, 'stop').mockImplementation(() => {
      throw new Error('Mock connection stop error')
    })

    await testLocallyWithWeb3Node(TestConnectionStopErrorCommand, [], web3)

    expect(logSpy.mock.calls).toMatchInlineSnapshot(`
      [
        [
          "Successful run",
        ],
      ]
    `)
    expect(errorSpy.mock.calls).toMatchInlineSnapshot(`[]`)
    expect(writeMock.mock.calls).toMatchInlineSnapshot(`
      [
        [
          "Failed to close the connection: Error: Mock connection stop error
      ",
        ],
      ]
    `)
  })
})
