import {
  Card,
  CardHeader,
  Badge,
  Media,
  Table,
  Container,
  Row,
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";
import React, { Component } from 'react';
import axios from 'axios';

class Services extends Component {
  
  state= {
    services: [],
    loading:false,
    total:0
  }
  
  componentDidMount(){
    this.findServices()
  }

  findServices = async ()=>{
    await axios.get(`https://pfr-data.herokuapp.com/api/v1/service?q=false&sort=1`)
      .then(res => {
        const services = res.data.services;
        console.log(res.data.services);
        this.setState({ services, loading:true, total:res.data.total });
      })
  }
  _renderServices(){
    if (this.state.loading) {
      return(
        this.state.services.map(srv => 
         <tr key={srv._id}>
           <th scope="row">
             <Media className="align-items-center">
               <a
                 className="avatar avatar-sm"
                 href="#pablo"
                 id="tooltip804044742"
                 onClick={(e) => e.preventDefault()}
               >
                 <img
                   alt="..."
                   className="rounded-circle"
                   style={{height: "inherit", width: "inherit", objectFit: "cover"}}
                   src={
                     srv.user_id?.image ||
                     require("../../assets/img/theme/team-1-800x800.jpg")
                           .default
                   }
                 />
               </a>
               <Media>
                 <span className="mb-0 text-sm ml-2">
                   {srv.user_id.phone}
                 </span>
               </Media>
             </Media>
           </th>
             <td>
               {srv.user_id?.email}
             </td>
             <td> {srv.departure} <br/> {srv.date_depart}</td>
             <td> {srv.destination} <br/> {srv.date_dest}</td>
             <td>
               <Badge color="" className="badge-dot mr-4">
               
                 {/* <i className={srv.is_valid ? 'bg-success' : 'bg-warning'} /> */}
                 {srv.is_valid}
                 <div class="custom-control custom-switch">
                  <input checked={srv.is_valid} type="checkbox" class="custom-control-input text-danger" id="customSwitch1"/>
                  <label class="custom-control-label" for="customSwitch1"></label>
                </div>
               </Badge>
             </td>
         </tr>
        )
      )
    } else {
      return (
        <div style={{position:'absolute', top:'50%', left:'50%', width:'auto'}}>

          <tr className="spinner-border text-light" role="status">
            <span className="sr-only">Loading...</span>
          </tr>
        </div>
      )
    }
  }
  render(){
    return (
      <>
        <Header />
        {/* Page content */}
        <Container className="mt--7" fluid>
          {/* Table */}
          <Row>
            <div className="col">
              <Card className="shadow">
                <CardHeader className="border-0">
                  <h3 className="mb-0">Services</h3>
                </CardHeader>
                <Table className="align-items-center table-flush" style={{minHeight:'400px'}} responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Username</th>
                      <th scope="col">E-mail</th>
                      <th scope="col">Departure</th>
                      <th scope="col">Destination</th>
                      <th scope="col">Status</th>
                      <th scope="col" />
                    </tr>
                  </thead>
                  <tbody>
                    {this._renderServices()}
                  </tbody>
                </Table>
                {/* <CardFooter className="py-4">
                  <nav aria-label="...">
                    <Pagination
                      className="pagination justify-content-end mb-0"
                      listClassName="justify-content-end mb-0"
                    >
                      <PaginationItem className="disabled">
                        <PaginationLink
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                          tabIndex="-1"
                        >
                          <i className="fas fa-angle-left" />
                          <span className="sr-only">Previous</span>
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem className="active">
                        <PaginationLink
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          1
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          2 <span className="sr-only">(current)</span>
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          3
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fas fa-angle-right" />
                          <span className="sr-only">Next</span>
                        </PaginationLink>
                      </PaginationItem>
                    </Pagination>
                  </nav>
                </CardFooter> */}
              </Card>
            </div>
          </Row>
        </Container>
      </>
    );
  }
};

export default Services;
