

export default function SignUp(){

    return(
        <div>
            <h2>SignUp</h2>
            <form>
                <div>
                    <label htmlFor="email">E-mail</label>
                    <input type="email" id ="email" name="email" />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" />
                </div>
                <div>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password" name="confirmPassword" id="confirmPassword" />
                </div>
            </form>
        </div>
    )
}