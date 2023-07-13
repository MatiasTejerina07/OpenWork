import { Box, Button, TextField } from '@mui/material'
import { FC } from 'react'
import { SaveAltOutlined, CancelRounded, AddCommentOutlined } from '@mui/icons-material';




export const NewEntry: FC = () => {
    return (
        <>
            <Box className='flex flex-col justify-center items-center w-11/12'>


                <Button
                    className='w-11/12'
                    startIcon={<AddCommentOutlined />}

                    variant='text'
                >
                    AGREGAR TAREA
                </Button>
                <TextField
                    className='w-11/12'
                    sx={{ marginTop: 2, marginBottom: 1 }}
                    placeholder='Nueva entrada'
                    autoFocus
                    multiline
                    label='Nueva entrada'
                    helperText='Ingrese un valor'
                />
                <Box className='flex justify-between w-11/12'>
                    <Button

                        variant='outlined'
                        color='error'
                        endIcon={<CancelRounded />}
                    >
                        Cancelar
                    </Button>
                    <Button
                        className=''
                        variant='outlined'
                        color='secondary'
                        endIcon={<SaveAltOutlined />}
                    >
                        Guardar
                    </Button>
                </Box>


            </Box>
        </>
    )
}
