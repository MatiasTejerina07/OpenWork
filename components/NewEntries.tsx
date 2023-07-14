import { ChangeEvent, FC, useState } from 'react'
import { Box, Button, TextField } from '@mui/material'
import { SaveAltOutlined, CancelRounded, AddCommentOutlined } from '@mui/icons-material';




export const NewEntry: FC = () => {

    const [isAdding, setIsAdding] = useState(false)
    const [touched, setTouched] = useState(false)
    const [inputValue, setInputValue] = useState('')

    const onTextFieldChanged = (event: ChangeEvent<HTMLInputElement>) => {



    }




    return (

        <Box className='flex flex-col justify-center items-center w-11/12'>


            {
                isAdding ? (

                    <>
                        <TextField
                            className='w-11/12'
                            sx={{ marginTop: 2, marginBottom: 1 }}
                            placeholder='Nueva entrada'
                            autoFocus
                            multiline
                            label='Nueva entrada'
                            helperText='Ingrese un valor'
                            value={inputValue}
                            onChange={onTextFieldChanged}
                        />
                        <Box className='flex justify-between w-11/12'>
                            <Button
                                variant='outlined'
                                color='error'
                                endIcon={<CancelRounded />}
                                onClick={() => setIsAdding(false)}
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
                    </>

                )

                    : (

                        <Button
                            className='w-11/12'
                            startIcon={<AddCommentOutlined />}
                            onClick={() => setIsAdding(true)}
                            variant='text'
                        >
                            AGREGAR TAREA
                        </Button>

                    )}


        </Box>

    )
}
