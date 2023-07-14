import { ChangeEvent, FC, useContext, useState } from 'react'
import { Box, Button, TextField } from '@mui/material'
import { SaveAltOutlined, CancelRounded, AddCommentOutlined } from '@mui/icons-material';
import { EntriesContext } from '@/context/entries';
import { UiContext } from '@/context/ui';




export const NewEntry: FC = () => {
    const [touched, setTouched] = useState(false)
    const [inputValue, setInputValue] = useState('')


    const { addNewEntry } = useContext(EntriesContext)
    const { isAddingEntry, setIsAddingEntry } = useContext(UiContext)

    const onTextFieldChanged = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value)
    }

    const onSave = () => {
        if (inputValue.length === 0) return
        else {
            addNewEntry(inputValue)
            setIsAddingEntry(false)
            setTouched(false)
            setInputValue('')
        }
    }



    return (

        <Box className='flex flex-col justify-center items-center w-11/12'>


            {
                isAddingEntry ? (

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
                                onClick={() => { setIsAddingEntry(false), setInputValue('') }}
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
                            onClick={() => setIsAddingEntry(true)}
                            variant='text'
                        >
                            AGREGAR TAREA
                        </Button>

                    )}


        </Box>

    )
}
