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
            <p>They are organized by page.</p>
            <p>Also, the titles are not official titles.. someday I'll add thumbnails but hopefully these descriptions will work for now. Thanks!<i className="far fa-grin-alt"></i></p>

                <h3 onClick={this.handleOpenLogin()}>Login / Signup<i className="fas fa-palette"></i></h3>
                {this.state.showLogin && (
                    <div className='section'>
                        <div id="pair">
                            <div id="art-title">Scattered Ice Cream Cones</div>
                            <div id="artist">Benjamín Hazael Rojas García</div>
                        </div>

                        <div id="pair">
                            <div id="art-title">Orange/Turquoise Shot Glasses</div>
                            <div id="artist">Ram HO</div>
                        </div>

                    </div>
                )}

                <h3 onClick={this.handleOpenHome()}>Home Page<i className="fas fa-palette"></i></h3>
                {this.state.showHome && (
                    <div className='section'>
                        <div id="pair">
                            <div id="art-title">Big Spread of Espresso Drinks</div>
                            <div id="artist">Cyril Saulnier</div>
                        </div>
                        <div id="pair">
                            <div id="art-title">Floral Sashimi Plate</div>
                            <div id="artist">Augustine Fou</div>
                        </div>
                        <div id="pair">
                            <div id="art-title">Dining Hall with Asian Lights and Noodles</div>
                            <div id="artist">Hien Nguyen</div>
                        </div>
                        <div id="pair">
                            <div id="art-title">Smoky Cocktail in Tumbler</div>
                            <div id="artist">Miguel Maldonado</div>
                        </div>
                    </div>
                )}

                <h3 onClick={this.handleOpenAdd()}>'Add Your Business'<i className="fas fa-palette"></i></h3>
                {this.state.showAdd && (
                    <div className='section'>
                        <div id="pair">
                            <div id="art-title">Yellow Chair & Bistro Table</div>
                            <div id="artist">Kenan Süleymanoğlu</div>
                        </div>
                        <div id="pair">
                            <div id="art-title">Three Vertical Espresso Drinks</div>     
                            <div id="artist">Nathan Dumlao</div>                 
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
                                    <div id="art-title">Dozens of Donuts on Trays</div>
                                    <div id="artist">Elisheva Gohar</div>
                                </div>
                                <div id="pair">
                                    <div id="art-title">Cupcakes in a White Box</div>
                                    <div id="artist">Persnickety Prints</div>
                                </div>
                                <div id="pair">
                                    <div id="art-title">Hands Holding Pastry</div>
                                    <div id="artist">Ham Kris</div>
                                </div>
                                <div id="pair">
                                    <div id="art-title">Quarter-section of Salami Sandwich</div>
                                    <div id="artist">Eaters Collective</div>
                                </div>
                            </div>

                            <h4>White Whale Saloon</h4>
                            <div>
                                <div id="pair">
                                    <div id="art-title">Empty Wooden Dining Room with Vintage Photos on Walls</div>
                                    <div id="artist">Austin Gardner</div>
                                </div>
                                <div id="pair">
                                    <div id="art-title">Colorful Stained-Glass, Wood-Railed Bar</div>
                                    <div id="artist">Jared Burris</div>
                                </div>
                                <div id="pair">
                                    <div id="art-title">Sugar-Rimmed Martini Glass with Red Liquid</div>
                                    <div id="artist">Oleh Moskaliuk</div>
                                </div>
                                <div id="pair">
                                    <div id="art-title">Lone Beer on Wooden Bar</div>
                                    <div id="artist">mnm.all</div>
                                </div>
                            </div>

                            <h4>Hola Ola</h4>
                            <div>
                                <div id="pair">
                                    <div id="art-title">Big Spread of Espresso Drinks (also on Home Page)</div>
                                    <div id="artist">Cyril Saulnier</div>
                                </div>
                                <div id="pair">
                                    <div id="art-title">View of Ocean through Tall Vertical Windows + People</div>
                                    <div id="artist">Sung Jin Cho</div>
                                </div>
                                <div id="pair">
                                    <div id="art-title">Simple shot of Healthy Burger</div>
                                    <div id="artist">Jiroe</div>
                                </div>
                                <div id="pair">
                                    <div id="art-title">Bowl of Guacamole & Chips with Olives</div>
                                    <div id="artist">Ronise daluz</div>
                                </div>
                            </div>
                          
                            <h4>Telegraph Place</h4>
                            <div>
                                <div id="pair">
                                    <div id="art-title">Long dining room table with Pink Theme</div>
                                    <div id="artist">Juliette F</div>
                                </div>
                                <div id="pair">
                                    <div id="art-title">Bowl of Halved-Shrimps and Pasta Noodles in White Dish</div>
                                    <div id="artist">UY VO</div>
                                </div>
                                <div id="pair">
                                    <div id="art-title">Slice of Steak</div>
                                    <div id="artist">José Ignacio Pompé</div>
                                </div>
                                <div id="pair">
                                    <div id="art-title">Plated Carrots</div>
                                    <div id="artist">Adam Jaime</div>
                                </div>
                            </div>

                            <h4>Tumbler Room</h4>
                            <div>
                                <div id="pair">
                                    <div id="art-title">Smoky Cocktail in Tumbler (also on Home Page)</div>
                                    <div id="artist">Miguel Maldonado</div>
                                </div>
                                <div id="pair">
                                    <div id="art-title">Red Velvet Lounge Sofas and Bar Tables</div>
                                    <div id="artist">Taylor Simpson</div>
                                </div>
                                <div id="pair">
                                    <div id="art-title">Serving Tray of Chilled Martini Glasses</div>
                                    <div id="artist">Olivier Rouge</div>
                                </div>
                                <div id="pair">
                                    <div id="art-title">Amber-colored Cocktail with Floral Garnish</div>
                                    <div id="artist">Ash Edmonds</div>
                                </div>
                            </div>
                    
                            <h4>Eastern Market Hall</h4>
                            <div>
                                <div id="pair">
                                    <div id="art-title">Dining Hall with Asian Lights and Noodles (also on Home Page)</div>
                                    <div id="artist">Hien Nguyen</div>
                                </div>
                                <div id="pair">
                                    <div id="art-title">Foamy Drink in Wine Glass with Bowl of Drinking Snacks</div>
                                    <div id="artist">Jakub Dziubak</div>
                                </div>
                                <div id="pair">
                                    <div id="art-title">Three Dumpling Dishes</div>
                                    <div id="artist">Abhishek Sanwa Limbu</div>
                                </div>
                                <div id="pair">
                                    <div id="art-title">Half-drunk Glass with Straw in Empty Bar Corner</div>
                                    <div id="artist">Sergey Isakhanyan</div>
                                </div>
                            </div>
                                             
                            <h4>Sugar Shoppe</h4>
                            <div>
                                <div id="pair">
                                    <div id="art-title">Layered Chocolate Pudding Dessert in Goblet</div>
                                    <div id="artist">Emile Mbunzama</div>
                                </div>
                                <div id="pair">
                                    <div id="art-title">Three Hands Holding Ice Cream Cones</div>
                                    <div id="artist">Mark Cruz</div>
                                </div>
                                <div id="pair">
                                    <div id="art-title">Dog licking Red/Blue Ice Cream Cone</div>
                                    <div id="artist">Christian Bowen</div>
                                </div>
                                <div id="pair">
                                    <div id="art-title">Raspberry Popsicle Bars on White Marble Top</div>
                                    <div id="artist">Daniel Öberg</div>
                                </div>
                            </div>
                                                  
                            <h4>Katagama</h4>
                            <div>
                                <div id="pair">
                                    <div id="art-title">Floral Sashimi Plate (also on Home Page)</div>
                                    <div id="artist">Augustine Fou</div>
                                </div>
                                <div id="pair">
                                    <div id="art-title">Sashimi with Vegetables in Black Bowl</div>
                                    <div id="artist">Jesse Ballantyne</div>
                                </div>
                                <div id="pair">
                                    <div id="art-title">Sushi Chef behind Counter</div>
                                    <div id="artist">Thomas Marban</div>
                                </div>
                                <div id="pair">
                                    <div id="art-title">Mixed Sushi Plate with Big Cuts of Fish and Seafood</div>
                                    <div id="artist">Cloris Ying</div>
                                </div>
                            </div>
                       
                            <h4>Brasserie Belmonde</h4>
                            <div>
                                <div id="pair">
                                    <div id="art-title">Side View of Halved Cheesy Pocket</div>
                                    <div id="artist">Roberto Valdivia</div>
                                </div>
                                <div id="pair">
                                    <div id="art-title">Grilled Fish Steak on Plate</div>
                                    <div id="artist">Sander Dalhuisen</div>
                                </div>
                                <div id="pair">
                                    <div id="art-title">Four Fish on Grill</div>
                                    <div id="artist">Clint Bustrillos</div>
                                </div>
                                <div id="pair">
                                    <div id="art-title">Cocktail Oysters</div>
                                    <div id="artist">Laura Peruchi</div>
                                </div>
                            </div>
                    
                            <h4>Chococat Cafe</h4>
                            <div>
                                <div id="pair">
                                    <div id="art-title">Rosetta Latte Art on Yellow Saucer</div>
                                    <div id="artist">Cristian Cristian</div>
                                </div>  
                                <div id="pair">
                                    <div id="art-title">Rosetta Matcha Latte Art</div>
                                    <div id="artist">Jason Leung</div>
                                </div>
                                <div id="pair">
                                    <div id="art-title">Seahorse Latte Art</div>
                                    <div id="artist">Mazen Ir</div>
                                </div>
                                <div id="pair">
                                    <div id="art-title">Bagel Sandwich on Plate</div>
                                    <div id="artist">Christian Kaindl</div>  
                                </div>                                          
                            </div>
                           
                            <h4>Green Plate</h4>
                            <div>
                                <div id="pair">
                                    <div id="art-title">Pea, Sprout Salad</div>
                                    <div id="artist">Jonathan Farber</div>
                                </div>
                                <div id="pair">
                                    <div id="art-title">Avocado Burger on Plate with Veggies</div>
                                    <div id="artist">Filip Mishevski</div>
                                </div>
                                <div id="pair">
                                    <div id="art-title">Pesto Pasta Salad</div>
                                    <div id="artist">Eaters Collective</div>
                                </div>
                                <div id="pair">
                                    <div id="art-title">Orange Noodles Tossed with Salad</div>
                                    <div id="artist">Toa Heftiba</div>
                                </div>
                                
                            </div>
                       
                            <h4>Lucia</h4>
                            <div>
                                <div id="pair">
                                    <div id="art-title">Yellow Cocktail with Lemon Wedge</div>
                                    <div id="artist">Pushpak Dsilva</div>
                                </div>
                                <div id="pair">
                                    <div id="art-title">Tall Column Bar with Vertical Lights</div>
                                    <div id="artist">DeMorris Byrd</div>
                                </div>
                                <div id="pair">
                                    <div id="art-title">Small Burger with Chips and Orange Drink in Wine Glass</div>
                                    <div id="artist">Gabrielle Cepella</div>
                                </div>
                                <div id="pair">
                                    <div id="art-title">Red Cocktail in Coupe Glass</div>
                                    <div id="artist">Nikita Tikhomirov</div>
                                </div>                          
                            </div>

                            <h4>Pixel Point</h4>
                            <div>
                                <div id="pair">
                                    <div id="art-title">Cafe Environment with People</div>
                                    <div id="artist">Wade Austin Ellis</div>
                                </div>
                                <div id="pair">
                                    <div id="art-title">Espresso Drinks & Plants</div>
                                    <div id="artist">Nathan Dumlao</div>
                                </div>
                                <div id="pair">
                                    <div id="art-title">To-Go Sandwich</div>
                                    <div id="artist">Pille-Riin Priske</div>
                                </div>
                                <div id="pair">
                                    <div id="art-title">Dog on Outdoor Porch</div>
                                    <div id="artist">Ross Sokolovski</div>
                                </div>                          
                            </div>

                            <h4>Squash Blossom</h4>
                            <div>
                                <div id="pair">
                                    <div id="art-title">Diamond-Pattern Arrangement of Coffee Cups</div>
                                    <div id="artist">Nathan Dumlao</div>
                                </div>
                                <div id="pair">
                                    <div id="art-title">Muffin, Coffee, Cactus</div>
                                    <div id="artist">Robert Bye</div>
                                </div>
                                <div id="pair">
                                    <div id="art-title">Orange-Furnished Cafe Environment</div>
                                    <div id="artist">Sebastian Schuppik</div>
                                </div>
                                <div id="pair">
                                    <div id="art-title">Many Cactii against Window</div>
                                    <div id="artist">Tiplada Mekvisan</div>
                                </div>                          
                            </div>

                            <h4>Big Craw</h4>
                            <div>
                                <div id="pair">
                                    <div id="art-title">Lots of Crawfish</div>
                                    <div id="artist">Stephanie Moody</div>
                                </div>
                                <div id="pair">
                                    <div id="art-title">Lobster with Sign</div>
                                    <div id="artist">Louis Hansel</div>
                                </div>
                                <div id="pair">
                                    <div id="art-title">Mac & Cheese Burger with Pickle</div>
                                    <div id="artist">Alex Haney</div>
                                </div>
                                <div id="pair">
                                    <div id="art-title">Person Holding Bowl of Crawfish</div>
                                    <div id="artist">Sidney Pearce</div>
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