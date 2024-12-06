// import { FaUserSecret } from 'react-icons/fa6';
// import { GiRotaryPhone } from 'react-icons/gi';

import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';

import { deleteContact, editContact } from '../../redux/contacts/operations';
import { useDispatch } from 'react-redux';
//import { confirmAlert } from 'react-confirm-alert';
//import 'react-confirm-alert/src/react-confirm-alert.css';
//import s from './Contact.module.css';
//import './react-confirm-alert.css';

import { Box, Button, Typography } from '@mui/material';
import { Delete } from '@mui/icons-material';
//import { Delete, Edit } from '@mui/icons-material';
import ConfirmationDialog from '../ConfirmationDialog/ConfirmationDialog';
import ModalForm from '../ModalForm/ModalForm';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contact.id));

  const handleEdit = values => {
    dispatch(
      editContact({
        id: values.id,
        name: values.name,
        number: values.number,
      })
    );
  };

  return (
    <li
      style={{
        listStyle: 'none',
        marginBottom: '8px',
      }}
    >
      <Box
        sx={{
          width: '298px',
          padding: '16px',
          border: '1px solid #ccc',
          borderRadius: '8px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Box
            sx={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}
          >
            <PersonIcon style={{ marginRight: '8px' }} />
            <Typography
              variant="body1"
              sx={{
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                maxWidth: '200px',
              }}
            >
              {contact.name}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <PhoneIcon style={{ marginRight: '8px' }} />
            <Typography variant="body1">{contact.number}</Typography>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', gap: '8px', flexDirection: 'column' }}>
          <ModalForm
            title="Edit contact"
            initialValues={{
              id: contact.id,
              name: contact.name,
              number: contact.number,
            }}
            onSubmit={handleEdit}
            openBtnLabel="Edit"
            submitBtnLabel="Update"
          />
          <ConfirmationDialog
            title="Contact delete"
            description="Are you sure you want to proceed?"
            response={handleDelete}
          >
            {showDialog => (
              <Button
                variant="contained"
                type="button"
                onClick={showDialog}
                startIcon={<Delete />}
              >
                Delete
              </Button>
            )}
          </ConfirmationDialog>
        </Box>
      </Box>
    </li>
    // <li className={s.contactCard}>
    //   <div className={s.nameNumber}>
    //     <div className={s.contactField}>
    //       <FaUserSecret className={s.icon} />
    //       <p>{contact.name}</p>
    //     </div>
    //     <div className={s.contactField}>
    //       <GiRotaryPhone className={s.icon} />
    //       <p>{contact.number}</p>
    //     </div>
    //   </div>
    //   <div className={s.buttons}>
    //     <ModalForm
    //       title="Edit contact"
    //       initialValues={{
    //         id: contact.id,
    //         name: contact.name,
    //         number: contact.number,
    //       }}
    //       onSubmit={handleEdit}
    //       openBtnLabel="Edit"
    //       submitBtnLabel="Update"
    //     />

    //     <ConfirmationDialog
    //       title="Contact delete"
    //       description="Are you sure you want to proceed?"
    //       response={handleDelete}
    //     >
    //       {showDialog => (
    //         <Button
    //           variant="contained"
    //           type="button"
    //           onClick={showDialog}
    //           startIcon={<Delete />}
    //         >
    //           Delete
    //         </Button>
    //       )}
    //     </ConfirmationDialog>
    //   </div>
    // </li>
  );
};

export default Contact;
