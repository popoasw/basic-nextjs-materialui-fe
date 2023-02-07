import {
  Box, 
  Grid, 
  Typography,
  Divider,
  Paper,
  FormControl,
  InputLabel,
  Input,
  Button,
  ButtonGroup,
  Table,
  TableRow,
  TableCell,
  TableContainer,
  TableHead,
  TableBody,
  TableFooter,
  TablePagination,
} from "@mui/material";

import Modal from '@mui/material/Modal';

// const ListModal = (props) => {
//   return (
//     <CModal
//       show={props.show}
//       onClose={() => props.onClose(!props.show)}
//       size="xl"
//     >
//       <CModalHeader closeButton>
//         <CModalTitle>{props.title}</CModalTitle>
//       </CModalHeader>
//       <CModalBody>
//         <CDataTable
//           size="sm"
//           responsive
//           items={props.items}
//           fields={props.fields}
//           tableFilter
//           itemsPerPage={10}
//           itemsPerPageSelect
//           pagination
//           hover
//           clickableRows
//           onRowClick={(e) => props.getRowData(e)}
//         />
//       </CModalBody>
//     </CModal>
//   );
// };

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  //bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 24,
  p: 1,
};

const ModalList = (props) => {
  return (
    <>
      <Modal
        open={props.open}
        onClose={props.onClose}
        aria-labelledby="modal-modal-title"
        //aria-describedby="modal-modal-description"
      >
        <Box sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: 600,
                  bgcolor: 'background.paper',
                  border: '1px solid #000',
                  boxShadow: 24,
                  p: 1,
                }}>

          {/* title */}
          <Grid container item xs={12}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {props.title}
            </Typography>
          </Grid>
          {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}

          {/* table */}
          <Grid container item xs={12}
                sx={{ mr:0, bgcolor: 'background.paper', borderRadius: 1, boxShadow: 3 }}>            
            <TableContainer>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    {props.headerList &&
                      props.headerList.map((head, index) => (
                        <TableCell sx={{ fontWeight: "bold" }} key={index}>
                          {head.label}
                        </TableCell>
                      ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {props.dataList &&
                    props.dataList.map((item, index) => (
                      <TableRow hover role="checkbox" tabIndex={-1} key={item.pro_code} 
                                //selected={isItemSelected}
                                >
                        <TableCell>{item.pro_code}</TableCell>
                        <TableCell>{item.pro_name}</TableCell>
                      </TableRow>
                    ))}
                </TableBody>
                <TableFooter>
                  <TableRow>
                    <TablePagination
                      rowsPerPageOptions={[5, 10]}
                      count={props.count}
                      rowsPerPage={props.rowsPerPage}
                      page={props.page}
                      //onPageChange={props.onPageChange}
                      //onRowsPerPageChange={props.onRowsPerPageChange}
                    />
                  </TableRow>
                </TableFooter>
              </Table>
            </TableContainer>
          </Grid>

          {/* button */}
          <Grid container item xs={12}>
            <ButtonGroup variant="contained" aria-label="outlined primary button group"
                        sx={{ width: "100%", height: 25 }}
            >
              <Button sx={{ width: "100%" }}>OK</Button>
              <Button sx={{ width: "100%" }} 
                      onClick={props.onClick}>Cancel</Button>
            </ButtonGroup>
          </Grid>

        </Box>
      </Modal>
    </>
  );
};

export default ModalList;