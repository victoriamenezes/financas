import PeopleIcon from '@mui/icons-material/People';
import ImageIcon from '@mui/icons-material/Image';
import PublicIcon from '@mui/icons-material/Public';
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';
import SettingsInputComponentIcon from '@mui/icons-material/SettingsInputComponent';
import DnsIcon from '@mui/icons-material/Dns';

export const dashUserItems = [
    {
        id: 0,
        icon: <PeopleIcon />,
        label: 'Minha conta',
        route: 'minha-conta',
    },
    {
        id: 1,
        icon: <DnsIcon />,
        label: 'Meu saldo',
        route: 'meu-saldo',
    },
    {
        id: 2,
        icon: <ImageIcon />,
        label: 'Investimentos',
        route: 'meus-investimentos',
    },
    {
        id: 3,
        icon: <PublicIcon />,
        label: 'Empréstimos',
        route: 'meus-emprestimos',
    },
    {
        id: 4,
        icon: <SettingsEthernetIcon />,
        label: 'Outros serviços',
        route: 'outros-servicos',
    },
    {
        id: 5,
        icon: <SettingsInputComponentIcon />,
        label: 'Ajuda',
        route: 'ajuda',
    },
]
