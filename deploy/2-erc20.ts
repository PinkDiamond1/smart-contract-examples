import {HardhatRuntimeEnvironment} from 'hardhat/types';
import {DeployFunction} from 'hardhat-deploy/types';

const func: DeployFunction = async function(hre: HardhatRuntimeEnvironment) {
    const { deployments, getNamedAccounts } = hre;
    const { deploy, log } = deployments;
    const { deployer } = await getNamedAccounts();

    const result = await deploy('MyERC20', {
        from: deployer,
        args: [],
        skipIfAlreadyDeployed: true,
        log: true
    });
};

func.tags = ['2', 'ERC20'];
func.dependencies = [];
export default func;
