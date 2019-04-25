import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div className="container mt-5">

            <h3 className="text-center">Contact us</h3><br />
            
            <div className="row">
              <div className="col-md-8">
                  <form>
                    <input className="form-control" name="name" placeholder="Name..." /><br />
                    <input className="form-control" name="phone" placeholder="Phone..." /><br />
                    <input className="form-control" name="email" placeholder="E-mail..." /><br />
                    <textarea className="form-control" name="text" placeholder="How can we help you?"></textarea><br />
                    <input className="btn btn-primary" type="submit" value="Send" /><br /><br />
                  </form>
              </div>
              <div className="col-md-4">
                <b>Customer service:</b> <br />
                Phone: +1 129 209 291<br />
                E-mail: <a href="mailto:support@mysite.com">support@mysite.com</a><br />
                <br /><br />
                <b>Headquarter:</b><br />
                Company Inc, <br />
                Las vegas street 201<br />
                55001 Nevada, USA<br />
                Phone: +1 145 000 101<br />
                <a href="mailto:usa@mysite.com">usa@mysite.com</a><br />
            
            
                <br /><br />
                <b>Hong kong:</b><br />
                Company HK Litd, <br />
                25/F.168 Queen<br />
                Wan Chai District, Hong Kong<br />
                Phone: +852 129 209 291<br />
                <a href="mailto:hk@mysite.com">hk@mysite.com</a><br />
            
                
              </div>
            </div>
            
            </div>
        );
    }
}

export default Contact;