import toast from 'vanillatoasts';

const ENDPOINT = {
    USERS: 'https://randomuser.me/api/'
}

const handleError = (error) => {
    console.log('AJAX:', error);
    
    toast.create({
        title: 'Error',
        text: error.toString(), 
        timeout: 4000,
        type: 'error'
    });
}

export default {ENDPOINT, handleError};
