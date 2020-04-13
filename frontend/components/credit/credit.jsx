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

        this.handleOpenHome = this.handleOpenHome.bind(this);

        this.handleOpenAdd = this.handleOpenAdd.bind(this);

        this.handleOpenBusinesses = this.handleOpenBusinesses.bind(this);
        this.backToTop = this.backToTop.bind(this);
    };

    handleOpenLogin(e) {
        return e => {
            (this.state.showLogin === false) ? (this.setState({ showLogin: true })) : (this.setState({ showLogin: false}))
        }
    }

    handleOpenHome(e) {
        return e => {
            (this.state.showHome === false) ? (this.setState({ showHome: true })) : (this.setState({ showHome: false }))
        }
    }

    handleOpenAdd(e) {
        return e => {
            (this.state.showAdd === false) ? (this.setState({ showAdd: true })) : (this.setState({ showAdd: false }))
        }
    }

    backToTop(e) {
        return e => {
            window.scrollTo(0, 0)
        }
    }

    handleOpenBusinesses(e) {
        return e => {
            (this.state.showBusinesses === false) ? (this.setState({ showBusinesses: true })) : (this.setState({ showBusinesses: false }))
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
            <p>They are organized by Page<i className="far fa-grin-alt"></i></p>
                <h3 onClick={this.handleOpenLogin()}>Login / Signup<i className="fas fa-palette"></i></h3>
                {this.state.showLogin && (
                    <div className='section'>
                        <div id="pair">
                            <div>Scattered Ice Creams</div>
                            <div>Benjamín Hazael Rojas García</div>
                        </div>

                        <div id="pair">
                            <div>Orange/Turquoise Shot Glasses</div>
                            <div>Ram HO</div>
                        </div>

                    </div>
                )}

                <h3 onClick={this.handleOpenHome()}>Home Page<i className="fas fa-palette"></i></h3>
                {this.state.showHome && (
                    <div className='section'>
                        <div id="pair">
                            <div>Big Spread of Espresso Drinks</div>
                            <div>Cyril Saulnier</div>
                        </div>
                        <div id="pair">
                            <div>Floral Sashimi Plate</div>
                            <div>Augustine Fou</div>
                        </div>
                        <div id="pair">
                            <div>Dining Hall with Asian Lights and Noodles</div>
                            <div>Hien Nguyen</div>
                        </div>
                        <div id="pair">
                            <div>Smoky Cocktail in Tumbler</div>
                            <div>Miguel Maldonado</div>
                        </div>
                    </div>
                )}

                <h3 onClick={this.handleOpenAdd()}>'Add Your Business'<i className="fas fa-palette"></i></h3>
                {this.state.showAdd && (
                    <div className='section'>
                        <div id="pair">
                            <div>Yellow Chair & Bistro Table</div>
                            <div>Kenan Süleymanoğlu</div>
                        </div>
                        <div id="pair">
                            <div>3 Vertical Espresso Drinks</div>     
                            <div>Nathan Dumlao</div>                 
                        </div>
                    </div>
                )}

                <h3 onClick={this.handleOpenBusinesses()}>Business Profiles<i className="fas fa-palette"></i></h3>
                {this.state.showBusinesses && (
                    <div className='section'>
                        <div>
                            <h4>Sweet Baby Cakes</h4>
                            <div>
                                <div id="pair">
                                    <div>Dozens of Donuts on Trays</div>
                                    <div>Elisheva Gohar</div>
                                </div>
                                <div id="pair">
                                    <div>Cupcakes in a White Box</div>
                                    <div>Persnickety Prints</div>
                                </div>
                                <div id="pair">
                                    <div>Hands holding Pastry</div>
                                    <div>Ham Kris</div>
                                </div>
                                <div id="pair">
                                    <div>Quarter-section of Salami Sandwich</div>
                                    <div>Eaters Collective</div>
                                </div>
                            </div>

                            <h4>White Whale Saloon</h4>
                            <div>
                                <div id="pair">
                                    <div>Empty Wooden Dining Room with vintage photos on walls</div>
                                    <div>Austin Gardner</div>
                                </div>
                                <div id="pair">
                                    <div>Colorful wood-railed bar</div>
                                    <div>Jared Burris</div>
                                </div>
                                <div id="pair">
                                    <div>Sugar-rimmed Martini Glass with Red Liquid</div>
                                    <div>Oleh Moskaliuk</div>
                                </div>
                                <div id="pair">
                                    <div>Lone Beer on Wooden Bar</div>
                                    <div>mnm.all</div>
                                </div>
                            </div>

                            <h4>Hola Ola</h4>
                            <div>
                                <div id="pair">
                                    <div>Big Spread of Espresso Drinks (also on Home Page)</div>
                                    <div>Cyril Saulnier</div>
                                </div>
                                <div id="pair">
                                    <div>View of Ocean through Tall Vertical Windows and Backs of People</div>
                                    <div>Sung Jin Cho</div>
                                </div>
                                <div id="pair">
                                    <div>Simple shot of Healthy Burger</div>
                                    <div>Jiroe</div>
                                </div>
                                <div id="pair">
                                    <div>Bowl of Guacamole & Chips with Olives</div>
                                    <div>Ronise daluz</div>
                                </div>
                            </div>
                          
                            <h4>Telegraph Place</h4>
                            <div>
                                <div id="pair">
                                    <div>Long dining room table, empty with pink theme</div>
                                    <div>Juliette F</div>
                                </div>
                                <div id="pair">
                                    <div>Bowl of halved-shrimps and pasta noodles in white dish</div>
                                    <div>UY VO</div>
                                </div>
                                <div id="pair">
                                    <div>Slice of steak</div>
                                    <div>José Ignacio Pompé</div>
                                </div>
                                <div id="pair">
                                    <div>Plated Carrots</div>
                                    <div>Adam Jaime</div>
                                </div>
                            </div>

                            <h4>Tumbler Room</h4>
                            <div>
                                <div id="pair">
                                    <div>Smoky Cocktail in Tumbler (also on Home Page)</div>
                                    <div>Miguel Maldonado</div>
                                </div>
                                <div id="pair">
                                    <div>Red Velvet Lounge Sofas and Bar Tables</div>
                                    <div>Taylor Simpson</div>
                                </div>
                                <div id="pair">
                                    <div>Serving tray of chilled Martini Glasses</div>
                                    <div>Olivier Rouge</div>
                                </div>
                                <div id="pair">
                                    <div>Amber-colored cocktail with garnishes</div>
                                    <div>Ash Edmonds</div>
                                </div>
                            </div>
                    
                            <h4>Eastern Market Hall</h4>
                            <div>
                                <div id="pair">
                                    <div>Dining Hall with Asian Lights and Noodles (also on Home Page)</div>
                                    <div>Hien Nguyen</div>
                                </div>
                                <div id="pair">
                                    <div>Foamy Drink in Wine Glass with small bowl of snacks</div>
                                    <div>Jakub Dziubak</div>
                                </div>
                                <div id="pair">
                                    <div>Three shallow trays of dumplings</div>
                                    <div>Abhishek Sanwa Limbu</div>
                                </div>
                                <div id="pair">
                                    <div>Half-drunk glass with straw in empty bar corner</div>
                                    <div>Sergey Isakhanyan</div>
                                </div>
                            </div>
                                             
                            <h4>Sugar Shoppe</h4>
                            <div>
                                <div id="pair">
                                    <div>Layered chocolate pudding dessert in goblet</div>
                                    <div>Emile Mbunzama</div>
                                </div>
                                <div id="pair">
                                    <div>Three hands holding ice cream cones</div>
                                    <div>Mark Cruz</div>
                                </div>
                                <div id="pair">
                                    <div>Dog licking two-scoop ice cream cone</div>
                                    <div>Christian Bowen</div>
                                </div>
                                <div id="pair">
                                    <div>Raspberry popsicle bars on white marble top</div>
                                    <div>Daniel Öberg</div>
                                </div>
                            </div>
                                                  
                            <h4>Katagama</h4>
                            <div>
                                <div id="pair">
                                    <div>Floral Sashimi Plate (also on Home Page)</div>
                                    <div>Augustine Fou</div>
                                </div>
                                <div id="pair">
                                    <div>Sashimi with Vegetables in Black Bowl</div>
                                    <div>Jesse Ballantyne</div>
                                </div>
                                <div id="pair">
                                    <div>Sushi Chef behind Counter</div>
                                    <div>Thomas Marban</div>
                                </div>
                                <div id="pair">
                                    <div>Mixed Sushi Plate with Big Cuts of Fish and Seafood</div>
                                    <div>Cloris Ying</div>
                                </div>
                            </div>
                       
                            <h4>Brasserie Belmonde</h4>
                            <div>
                                <div id="pair">
                                    <div>Side View of Halved Cheesy Pocket</div>
                                    <div>Roberto Valdivia</div>
                                </div>
                                <div id="pair">
                                    <div>Grilled fish steak on plate</div>
                                    <div>Sander Dalhuisen</div>
                                </div>
                                <div id="pair">
                                    <div>4 Fish on Grill</div>
                                    <div>Clint Bustrillos</div>
                                </div>
                                <div id="pair">
                                    <div>Cocktail Oysters</div>
                                    <div>Laura Peruchi</div>
                                </div>
                            </div>
                    
                            <h4>Chococat Cafe</h4>
                            <div>
                                <div id="pair">
                                    <div>Rosetta Latte Art on Yellow Saucer</div>
                                    <div>Cristian Cristian</div>
                                </div>  
                                <div id="pair">
                                    <div>Rosetta Matcha Latte Art</div>
                                    <div>Jason Leung</div>
                                </div>
                                <div id="pair">
                                    <div>Seahorse Latte Art</div>
                                    <div>Mazen Ir</div>
                                </div>
                                <div id="pair">
                                    <div>Bagel Sandwich on Plate</div>
                                    <div>Christian Kaindl</div>  
                                </div>                                          
                            </div>
                           
                            <h4>Green Plate</h4>
                            <div>
                                <div id="pair">
                                    <div>Pea, Sprout Salad</div>
                                    <div>Jonathan Farber</div>
                                </div>
                                <div id="pair">
                                    <div>Avocado Burger on Plate with Veggies</div>
                                    <div>Filip Mishevski</div>
                                </div>
                                <div id="pair">
                                    <div>Pesto Pasta Salad</div>
                                    <div>Eaters Collective</div>
                                </div>
                                <div id="pair">
                                    <div>Orange Noodles Tossed with Salad</div>
                                    <div>Toa Heftiba</div>
                                </div>
                                
                            </div>
                       
                            <h4>Lucia</h4>
                            <div>
                                <div id="pair">
                                    <div>Yellow Cocktail with Lemon Wedge & Cloves</div>
                                    <div>Pushpak Dsilva</div>
                                </div>
                                <div id="pair">
                                    <div>Tall Column Bar with Vertical Lights</div>
                                    <div>DeMorris Byrd</div>
                                </div>
                                <div id="pair">
                                    <div>Small Burger with Chips and Orange Drink in Wine Glass</div>
                                    <div>Gabrielle Cepella</div>
                                </div>
                                <div id="pair">
                                    <div>Red Cocktail in Coupe Glass</div>
                                    <div>Nikita Tikhomirov</div>
                                </div>                          
                            </div>

                            <h4>Pixel Point</h4>
                            <div>
                                <div id="pair">
                                    <div>Cafe Environment with People</div>
                                    <div>Wade Austin Ellis</div>
                                </div>
                                <div id="pair">
                                    <div>Espresso Drinks & Plants</div>
                                    <div>Nathan Dumlao</div>
                                </div>
                                <div id="pair">
                                    <div>To-Go Sandwich</div>
                                    <div>Pille-Riin Priske</div>
                                </div>
                                <div id="pair">
                                    <div>Dog on Outdoor Porch</div>
                                    <div>Ross Sokolovski</div>
                                </div>                          
                            </div>

                            <h4>Squash Blossom</h4>
                            <div>
                                <div id="pair">
                                    <div>Diamond Patterned Coffee Cups</div>
                                    <div>Nathan Dumlao</div>
                                </div>
                                <div id="pair">
                                    <div>Muffin, Coffee, Cactus</div>
                                    <div>Robert Bye</div>
                                </div>
                                <div id="pair">
                                    <div>Orange Furnished Cafe Environment</div>
                                    <div>Sebastian Schuppik</div>
                                </div>
                                <div id="pair">
                                    <div>Many Cactii against window</div>
                                    <div>Tiplada Mekvisan</div>
                                </div>                          
                            </div>

                        </div>
                        <button onClick={this.backToTop()}>Back To Top<i className="fas fa-arrow-up"></i></button>
                        {/* <button onClick={this.handleCloseBusinesses()}>Close Section</button> */}
                    </div>
                )}
          </div>

        )
    }
};

export default Credit;