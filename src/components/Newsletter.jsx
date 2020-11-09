import React, {Component} from "react";

export default class Newsletter extends Component {
    
    // Managing the Data

    userData;

    constructor(props) {
        super(props);

        this.onChangeemail = this.onChangeemail.bind(this);
        this.onChangefname = this.onChangefname.bind(this);
        this.onChangelname = this.onChangelname.bind(this);
        this.onChangegender = this.onChangegender.bind(this);
        this.onChangedate = this.onChangedate.bind(this);
        this.onChangelang = this.onChangelang.bind(this);

        this.state = {
            email: "",
            fname: "",
            lname: "",
            gender: "",
            date: "",
            lang: ""
        };
    };

    //Form Events

    onChangeemail(e) {
        this.setState({email: e.target.value})
    };

    onChangefname(e) {
        this.setState({fname: e.target.value})
    };

    onChangelname(e) {
        this.setState({lname: e.target.value})
    };

    onChangegender(e) {
        this.setState({gender: e.target.value})
    };

    onChangedate(e) {
        this.setState({date: e.target.value})
    }

    onChangelang(e) {
        this.setState({lang: e.target.value})
    };

    onSubmit(e) {
        e.preventDefault()

        this.setState({
            email: "",
            fname: "",
            lname: "",
            gender: "",
            date: "",
            lang: ""
        });
    };

    // React Life Cycle

    componentDidMount() {
        this.userData = JSON.parse(localStorage.getItem("user"));

        if (localStorage.getItem("user")) {
            this.setState({
                email: this.userData.email,
                fname: this.userData.fname,
                lname: this.userData.lname,
                gender: this.userData.gender,
                date: this.userData.date,
                lang: this.userData.lang
            })
        } else {
            this.setState({
                email: "",
                fname: "",
                lname: "",
                gender: "",
                date: "",
                lang: ""
            })
        };
    };

    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem("user", JSON.stringify(nextState))
    };

    //HTML

    render() {
        return (
            <div className="news">
                <main className="newsMain container">
                    <div>
                        <h1>SUBSCRIBE TO THE NEWSLETTER</h1>
                        <p>Subscribe to the newsletter for news, new music, new events, exclusive updates and more. </p>
                    </div>
                    <div>
                        <form onSubmit={this.onSubmit}>
                            <p><b>*</b> indicates a required field.</p>
                            <div className="formB inp">
                                <label>Email Address<b>*</b></label>
                                <input type="email" name="email" id="email" value={this.state.email} onChange={this.onChangeemail} required />
                            </div>
                            <div className="formB inp">
                                <label>First Name<b>*</b></label>
                                <input type="text" name="first_name" id="first_name" value={this.state.fname} onChange={this.onChangefname} required />
                            </div>
                            <div className="formB inp">
                                <label>Last Name<b>*</b></label>
                                <input type="text" name="last_name" id="last_name" value={this.state.lname} onChange={this.onChangelname} required />
                            </div>
                            <div className="gender">
                                <label>Gender</label>
                                <br />
                                <input type="radio" id="male" name="gender" value="male" onChange={this.onChangegender} />
                                <label for="male">Male</label>
                                <br />
                                <input type="radio" id="female" name="gender" value="female" onChange={this.onChangegender} />
                                <label for="female">Female</label>
                                <br />
                                <input type="radio" id="not_binary" name="gender" value="not_binary" onChange={this.onChangegender} />
                                <label for="not_binary">Not Binary</label>
                            </div>
                            <div className="formB">
                                <label>Birthday<b>*</b></label>
                                <input type="date" name="date" id="birthday" value={this.state.date} onChange={this.onChangedate} required />
                            </div>
                            <div className="formB lang">
                                <label>Prefered Language</label>
                                <select id="language">
                                    <option value="english" name="lang" onChange={this.onChangelang} selected>English</option>
                                    <option value="italian" name="lang" onChange={this.onChangelang}>Italian</option>
                                </select>
                            </div>
                            <button type="submit" value="submit">Subscribe</button>
                        </form>
                    </div>
                </main>
            </div>
        )
    };
};