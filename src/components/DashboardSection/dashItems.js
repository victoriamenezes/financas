import PeopleIcon from '@mui/icons-material/People';
import ImageIcon from '@mui/icons-material/Image';
import PublicIcon from '@mui/icons-material/Public';
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';
import SettingsInputComponentIcon from '@mui/icons-material/SettingsInputComponent';
import DnsIcon from '@mui/icons-material/Dns';

export const mainDashItems = [
    {
        id: 0,
        icon: <PeopleIcon />,
        label: 'Usuários',
        route: 'usuarios',
    },
    {
        id: 1,
        icon: <DnsIcon />,
        label: 'Database',
        route: 'database',
    },
    {
        id: 2,
        icon: <ImageIcon />,
        label: 'Financeiro',
        route: 'financeiro',
    },
    {
        id: 3,
        icon: <PublicIcon />,
        label: 'Parceiros',
        route: 'parceiros',
    },
    {
        id: 4,
        icon: <SettingsEthernetIcon />,
        label: 'Serviços',
        route: 'servicos',
    },
    {
        id: 5,
        icon: <SettingsInputComponentIcon />,
        label: 'Funcionarios',
        route: 'funcionarios',
    },
]
