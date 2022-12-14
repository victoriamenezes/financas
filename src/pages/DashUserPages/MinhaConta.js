import React from 'react'
import { useState } from 'react'
import CommonCard from '../../components/common/commonCard';
import RefreshIcon from '@mui/icons-material/Refresh';
import SearchBar from '../../components/common/searchBar';
import IconButton from '@mui/material/IconButton';
import CommonButton from '../../components/common/commonButton';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import GridWrapper from '../../components/common/gridWrapper';
import { headerStyles } from '../../components/DashboardSection/headerStyles';
import NewUserModal from '../../components/Modals/NewUserModal';
import UserDashboard from './UserDashboard';
// import DashHeader from '../../components/DashboardSection/dashHeader';

const MinhaConta = () => {
    const [open, setOpen] = useState(false);
    const [users, setUsers] = useState([]);
    const [searchResults, setSearchResults] = useState(users);

    const getHeader = () => {
        const handleSearch = (value) => {
            filterData(value);
        };

        const filterData = (value) => {
            const lowercasedValue = value.toLowerCase().trim();
            if (lowercasedValue === '') setUsers(searchResults);
            else {
                const filteredData = searchResults.filter((item) => {
                    return Object.keys(item).some((key) =>
                    item[key].toString().toLowerCase().includes(lowercasedValue)
                    );
                });
                setUsers(filteredData)
            };
        };

        const addUser = () => {
            setOpen(true);
        };

        return (

            <Box sx={headerStyles.wrapper}>
                <SearchBar
                    placeholder="Procurar por endereço de email, nome de usuário ou número de telefone"
                    onChange={(event) => handleSearch(event.target.value)}
                    searchBarWidth='720px'
                />
                <Box>
                    <CommonButton
                        variant="contained"
                        onClick={addUser}
                        size="large"
                        sx={headerStyles.addUserButton}
                    >
                        Adicionar usuário
                    </CommonButton>
                    <IconButton>
                        <RefreshIcon />
                    </IconButton>
                </Box>
            </Box>
        )
    };

    const addNewUser = (data) => {
        users.push({ ...data });
        setOpen(false);
    };

    const getContent = () => (
        <>
            {
                users.length ?
                    users.map((user) => (
                        <Box sx={{ marginBottom: '20px' }}>
                            <Typography>Nome de usuário: {user.userId}</Typography>
                            <Typography>Email: {user.email}</Typography>
                            <Typography>Telefone: {user.phoneNumber}</Typography>
                        </Box>
                    )) :
                    <Typography
                        align="center"
                        sx={{ margin: '40px 16px', color: 'rgba(0, 0, 0, 0.6)', fontSize: '1.3rem'}}
                    >
                        Ainda não há usuários registrados.
                    </Typography>
            }
        </>
    );

    return (

        <GridWrapper>
          {/* <DashHeader /> */}
          <UserDashboard />

            <CommonCard
                header={getHeader()}
                content={getContent()}
            />
            <NewUserModal open={open} onClose={() => setOpen(false)} addNewUser={addNewUser}/>
        </GridWrapper>
    )
}

export default MinhaConta
