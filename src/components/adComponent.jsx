import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';


class AdInfo extends Component {

   

    state = { 
        imageURL: "../img/reliance-industries-logo.png",
        companyName: "Reliance Industries Ltd.",
        companyWOrk: "Digital Marketing Company",
        work1 : ['Digital Marketing','GSuite Google Mail','Mobile Apps Development'],
        work2 : ['Web & E-commerce','Branding & Creative','IPad Apps'],
        year:"2017",
        contact:"+91 9594 31 5559",
        time:['Open 8am Close 8pm','Open 8am Close 8pm','Open 8am Close 8pm','Open 8am Close 8pm','Open 8am Close 8pm','Open 9am Close 3pm','Closed'],
        order:"$ 1000-2000",
        team:"1-1000",
        ratio:"20%"
    };

    address ={

        block:"504, NBC Complex, Plot #43, Sector 11,Opp IDBI Bank, CBD Belapur",
        city:"Navi Mumbai",
        pin:"4000614"

    };

    icon = {

        color:"royalblue",
        
    };
    

    render() { 
        return ( 
            <div className="adContainer" style={{fontFamily:"Sans-Serif"}}>
            <Container style={{border:"2px solid"}}>
                <Row className="justify-content-md-center">
                    <Col md={1}>
                        <img style={{width:"100%"}} src={this.state.imageURL}  alt=""  />
                    </Col>

                    <Col md={8}>
                                <Row>
                                       
                                    <h5>Ad &nbsp;{this.state.companyName}</h5>
                                        
                                    <h6>{this.state.companyWOrk}</h6>
                                        
                                </Row>
                                <Row>
                                    <Col> 
                                            {this.state.work1.map(work =><li>{work}</li>)}
                                    </Col>
                                    <Col>
                                            {this.state.work2.map(work =><li>{work}</li>)}
                                    </Col>
                                </Row>
                                <Row>
                                    <div>
                                         <i class="far fa-location-arrow" ></i>{this.address.block},{this.address.city}-{this.address.pin}.                   
                                    </div>
                                </Row>
                                <Row>
                                    <Col sm> 
                                            <i class="fas fa-search"></i> &nbsp;<span>Founding Year: {this.state.year}</span>
                                            
                                    </Col>
                                    <Col sm> 
                                             <i class="far fa-phone-alt"></i>&nbsp;<span> {this.state.contact}</span>
                                           
                                            
                                    </Col>
                                    <Col sm >
                                             <i class="far fa-clock"></i><select style={{border:"none"}} >{this.state.time.map(time1 => <option>{time1}</option>)}</select>
                                            
                                            
                                    </Col>
                                </Row> 
                                <hr />
                                <Row>
                                    <Col sm={10}>
                                    <span>
                                        Min Order : {this.state.order}
                                    </span>
                                    <span>
                                        Team : {this.state.team}
                                    </span>
                                    <span>
                                        Response Rate : {this.state.ratio}
                                    </span>
                                    </Col>
                                    <Col>
                                    <i class="far fa-sync-alt"></i>Compare
                                    </Col>
                                   

                                </Row>
                       
                    </Col>
                    <Col md={3}>

                    </Col>
                </Row>
            </Container>
            </div>
         );
    }
}
  
export default AdInfo;
