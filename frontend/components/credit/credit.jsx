import React from 'react';

class Credit extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            showLogin: false,
            showHome: false,
            showAdd: false,
            showBusinesses: false
        };

        this.handleOpenLogin = this.handleOpenLogin.bind(this);
        this.handleCloseLogin = this.handleCloseLogin.bind(this);

        this.handleOpenHome = this.handleOpenHome.bind(this);
        this.handleCloseHome = this.handleCloseHome.bind(this);

        this.handleOpenAdd = this.handleOpenAdd.bind(this);
        this.handleCloseAdd = this.handleCloseAdd.bind(this);

        this.handleOpenBusinesses = this.handleOpenBusinesses.bind(this);
        this.handleCloseBusinesses = this.handleCloseBusinesses.bind(this);
    };

    handleOpenLogin(e) {
        return e => {
            this.setState({showLogin: true})
        }
    }

    handleCloseLogin(e) {
        return e => {
            this.setState({showLogin: false})
        }
    }

    handleOpenHome(e) {
        return e => {
            this.setState({ showHome: true })
        }
    }

    handleCloseHome(e) {
        return e => {
            this.setState({ showHome: false })
        }
    }

    handleOpenAdd(e) {
        return e => {
            this.setState({ showAdd: true })
        }
    }
    handleCloseAdd(e) {
        return e => {
            this.setState({ showAdd: false })
        }
    }

    handleOpenBusinesses(e) {
        return e => {
            this.setState({ showBusinesses: true })
        }
    }

    handleCloseBusinesses(e) {
        return e => {
            this.setState({ showBusinesses: false })
        }
    }


    render() {
        return (
      
          <div className="credits">
            <h2>{this.props.formType}</h2>

            <p>So first things first: I love an Easter Egg. That said, I am also of the mind that many times artists are underpaid and go unrecognized for their talent and hard work.</p>
            <p>So while all of these photos for this project were taken for free from unsplash.com, I just thought I'd make a little
                credits page in case anyone was interested in any of the images and/or reaching out to the individual artists themselves
            </p>
            <p>They are organized by Component<i className="far fa-grin-alt"></i></p>
                <h3 onClick={this.handleOpenLogin()}>Login/Signup Form<i className="fas fa-palette"></i></h3>
                {this.state.showLogin && (
                    <div className='section'>
                        <div>Scattered Ice Creams</div>
                        <div>Orange/Turquoise Shot Glasses</div>


                        <button onClick={this.handleCloseLogin()}>Close Section</button>
                    </div>
                )}
                <h3 onClick={this.handleOpenHome()}>Homepage<i className="fas fa-palette"></i></h3>
                {this.state.showHome && (
                    <div className='section'>
                        <div>Big Spread of Espresso Drinks</div>
                        <div>Floral Sashimi Plate</div>
                        <div>Dining Hall with Asian Lights and Noodles</div>
                        <div>Smoky Cocktail in Tumbler</div>
                        <button onClick={this.handleCloseHome()}>Close Section</button>
                    </div>
                )}
                <h3 onClick={this.handleOpenAdd()}>'Add Your Business' Form<i className="fas fa-palette"></i></h3>
                {this.state.showAdd && (
                    <div className='section'>
                        <div>Yellow Chair & Bistro Table</div>
                        <div>3 Vertical Espresso Drinks</div>
                        <button onClick={this.handleCloseAdd()}>Close Section</button>
                    </div>
                )}
                <h3 onClick={this.handleOpenBusinesses()}>All the Little Businesses<i className="fas fa-palette"></i></h3>
                {this.state.showBusinesses && (
                    <div className='section'>
                        <div>
                            <h4>Sweet Baby Cakes</h4>
                            <div>Dozens of Donuts on Trays</div>
                            <div>Cupcakes in a White Box</div>
                            <div>Hands holding Pastry</div>
                            <div>Quarter-section of Salami Sandwich</div>

                            <h4>White Whale Saloon</h4>
                            <div>Empty Wooden Dining Room with vintage photos on walls</div>
                            <div>Colorful wood-railed bar</div>
                            <div>Sugar-rimmed Martini Glass with Red Liquid</div>
                            <div>Lone Beer on Wooden Bar</div>
                           

                            <h4>Hola Ola</h4>
                            <div>Big Spread of Espresso Drinks (also on Home Page)</div>
                            <div>View of Ocean through Tall Vertical Windows and Backs of People</div>
                            <div>Simple shot of Healthy Burger</div>
                            <div>Bowl of Guacamole & Chips with Olives</div>
                          
                            <h4>Telegraph Place</h4>
                            <div>Long dining room table, empty with pink theme</div>
                            <div>Bowl of halved-shrimps and pasta noodles in white dish</div>
                            <div>Slice of steak</div>
                            <div>Plated Carrots</div>
                           
                            <h4>Tumbler Room</h4>
                            <div>Smoky Cocktail in Tumbler (also on Home Page)</div>
                            <div>Red Velvet Lounge Sofas and Bar Tables</div>
                            <div>Serving tray of chilled Martini Glasses</div>
                            <div>Amber-colored cocktail with garnishes</div>
                    
                            <h4>Eastern Market Hall</h4>
                            <div>Dining Hall with Asian Lights and Noodles (also on Home Page)</div>
                            <div>Foamy Drink in Wine Glass with small bowl of snacks</div>
                            <div>Three shallow trays of dumplings</div>
                            <div>Half-drunk glass with straw in empty bar corner</div>
                    
                            <h4>Sugar Shoppe</h4>
                            <div>Layered chocolate pudding dessert in goblet</div>
                            <div>Three hands holding ice cream cones</div>
                            <div>Dog licking two-scoop ice cream cone</div>
                            <div>Raspberry popsicle bars on white marble top</div>
                          
                            <h4>Katagama</h4>
                            <div>Floral Sashimi Plate (also on Home Page)</div>
                            <div>Sashimi with Vegetables in Black Bowl</div>
                            <div>Sushi Chef behind Counter</div>
                            <div>Mixed Sushi Plate with Big Cuts of Fish and Seafood</div>
                       
                            <h4>Brasserie Belmonde</h4>
                            <div>Side View of Halved Cheesy Pocket</div>
                            <div>Grilled fish steak on plate</div>
                            <div>4 Fish on Grill</div>
                            <div>Cocktail Oysters</div>
                   
                            <h4>Chococat Cafe</h4>
                            <div>Rosetta Latte Art on Yellow Saucer</div>
                            <div>Rosetta Matcha Latte Art</div>
                            <div>Seahorse Latte Art</div>
                            <div>Bagel Sandwich on Plate</div>
                     
                            <h4>Green Plate</h4>
                            <div>Pea, Sprout Salad</div>
                            <div>Avocado Burger on Plate with Veggies</div>
                            <div>Pesto Pasta Salad</div>
                            <div>Orange Noodles Tossed with Salad</div>
                       
                            <h4>Lucia</h4>
                            <div>Yellow Cocktail with Lemon Wedge & Cloves</div>
                            <div>Tall Column Bar with Vertical Lights</div>
                            <div>Small Burger with Chips and Orange Drink in Wine Glass</div>
                            <div>Red Cocktail in Coupe Glass</div>
                        </div>
                        <button onClick={this.handleCloseBusinesses()}>Close Section</button>
                    </div>
                )}
          </div>

        )
    }
};

export default Credit;