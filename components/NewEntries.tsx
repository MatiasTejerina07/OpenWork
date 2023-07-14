import { ChangeEvent, FC, useContext, useState } from 'react'
import { Box, Button, TextField } from '@mui/material'
import { SaveAltOutlined, CancelRounded, AddCommentOutlined } from '@mui/icons-material';
import { EntriesContext } from '@/context/entries';




export const NewEntry: FC = () => {

    const [isAdding, setIsAdding] = useState(false)
    const [touched, setTouched] = useState(false)
    const [inputValue, setInputValue] = useState('')


    const { addNewEntry } = useContext(EntriesContext)

    const onTextFieldChanged = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value)
    }

    const onSave = () => {
        if (inputValue.length === 0) return
        else {
            addNewEntry(inputValue)
            setInputValue('')
        }
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
                            helperText={inputValue.length <= 0 && touched && 'Ingrese un valor'}
                            error={inputValue.length <= 0 && touched}
                            value={inputValue}
                            onChange={onTextFieldChanged}
                            onBlur={() => setTouched(true)}
                        />
                        <Box className='flex justify-between w-11/12'>
                            <Button
                                variant='outlined'
                                color='error'
                                endIcon={<CancelRounded />}
                                onClick={() => { setIsAdding(false), setInputValue('') }}
                            >
                                Cancelar
                            </Button>
                            <Button
                                className=''
                                variant='outlined'
                                color='secondary'
                                endIcon={<SaveAltOutlined />}
                                onClick={onSave}
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
