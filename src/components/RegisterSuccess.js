import React, { Component } from 'react'

export class RegisterSuccess extends Component {
    render() {
        return (
            <div className="mt-5 text-center">
                <h4></h4>Your Registration is successful. An Email verification has been sent to your email. Enter the digits to complete your verification.

                        <form onSubmit>

                            <input type="text" name="email_token"/>
                    
                       </form>
            </div>

               

        )
    }
}

export default RegisterSuccess
