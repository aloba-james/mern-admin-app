import React from 'react'
import { Search } from '@mui/icons-material'
import { IconButton, TextField, InputAdornment } from '@mui/material'
import { GridToolbarDensitySelector, GridToolbarContainer, GridToolbarExport, GridToolbarColumnsButton } from '@mui/x-data-grid'
import FlexBetween from './FlexBetween'

const DataGridCustomToolbar = () => {
    return (
        <GridToolbarContainer>
            <FlexBetween>
                <FlexBetween>
                    <GridToolbarColumnsButton />
                    <GridToolbarDensitySelector />
                    <GridToolbarExport />
                </FlexBetween>
                <FlexBetween>
                    <TextField
                        label="Search..."
                        sx={{ mb: "0.5rem", width: "15rem" }}
                        // onChange={(e) => setSeearchInput(e.target.value)}
                        // value = {searchInput}
                        variant="standard"
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton onClick={() => { }}>
                                        <Search />
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                </FlexBetween>
            </FlexBetween>
        </GridToolbarContainer>
    )
}

export default DataGridCustomToolbar