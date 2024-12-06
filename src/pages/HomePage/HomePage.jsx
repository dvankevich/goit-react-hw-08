import { Box, Typography, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

const HomePage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh', // Займає всю висоту екрану
        //backgroundColor: '#f5f5f5', // Світло-сірий фон
        padding: '20px',
      }}
    >
      <Typography variant="h2" sx={{ marginBottom: '20px' }}>
        Simple Phonebook App
      </Typography>
      <Typography
        variant="h5"
        sx={{ marginBottom: '20px', textAlign: 'center' }}
      >
        Your go-to solution for managing contacts effortlessly. Enjoy the
        benefits of fast contact search and a spacious, user-friendly interface.
      </Typography>
      <Box
        sx={{
          display: 'flex',
          gap: '16px',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <NavLink to="/register" style={{ textDecoration: 'none' }}>
          <Button variant="contained" color="primary">
            Register
          </Button>
        </NavLink>
        <Typography variant="body1">or</Typography>
        <NavLink to="/login" style={{ textDecoration: 'none' }}>
          <Button variant="contained" color="primary">
            Log In
          </Button>
        </NavLink>
      </Box>
    </Box>
  );
};

export default HomePage;
// import DocumentTitle from '../../components/DocumentTitle';

// const styles = {
//   container: {
//     minHeight: 'calc(100vh - 50px)',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   title: {
//     fontWeight: 500,
//     fontSize: 48,
//     textAlign: 'center',
//   },
// };

// export default function HomePage() {
//   return (
//     <>
//       <DocumentTitle>Home</DocumentTitle>

//       <div style={styles.container}>
//         <h1 style={styles.title}>
//           Phonebook welcome page{' '}
//           <span role="img" aria-label="Greeting icon">
//             💁‍♀️
//           </span>
//         </h1>
//       </div>
//     </>
//   );
// }
