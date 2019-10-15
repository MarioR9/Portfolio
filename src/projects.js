import React from 'react';
import { Card } from 'semantic-ui-react'
import About from './about.js'
import Contact from './contact.js'
import ScrollableAnchor from 'react-scrollable-anchor'

export default class Projects extends React.Component{
   
  
    render(){
        
        return(
            
            <div>
              <ScrollableAnchor id={'about'}>
                <div class='aboutBackground'>
                    <About/>
                </div>
              </ScrollableAnchor>
              <ScrollableAnchor id={'project'}>
                <div class="projectsheader">
                
                <h1 class="projectsheader">Projects___</h1> 
                </div>
                </ScrollableAnchor>
                <div class="projectContainer">
                <Card.Group itemsPerRow={3}>
                    <Card onClick={this.props.show(true)} >
                        <div class="container">
                            <img src='/assets/tranlatemebk.png' alt="Avatar" class="image"/>
                            <div class="overlay">
                                <div class="text">Translate Me</div>
                            </div>
                        </div>
    
                    </Card>
                    
                    <Card onClick={this.props.show2(true)}>
                        <div class="container">
                            <img src='/assets/rickandmortybk.png' alt="Avatar" class="image"/>
                            <div class="overlay">
                                <div class="text">Rick and Morty Adventures</div>
                            </div>
                        </div>
    
                    </Card>
                    <Card onClick={this.props.show3(true)}>
                        <div class="container">
                            <img src='/assets/tonesterbk.png' alt="Avatar" class="image"/>
                            <div class="overlay">
                                <div class="text">Tonester</div>
                            </div>
                        </div>
    
                    </Card>
                </Card.Group>
                </div>

                <div class="techgrid">
                <h1 class="techHeader">Experienced with___ </h1>
                <div class="techGridLogos">
                    <div>
                    <img class="techLogo" src="/assets/js.png"/> 
                    </div>
                    <div>
                    <img class="techLogo" src="/assets/react.png"/> 
                    </div>
                    <div>
                    <img class="techLogo" src="/assets/ruby.png"/> 
                    </div>
                    <div>
                    <img class="techLogo" src="/assets/watson.png"/> 
                    </div>
                    <div>
                    <img class="techLogo" src="/assets/spotify.png"/> 
                    </div>
                    <div>
                    <img class="techLogo" src="/assets/cloudinary.png"/>  
                    </div>
                    
                </div>
                </div>
                <div>
                <ScrollableAnchor id={'contact'}>
                    <Contact/>
                    </ScrollableAnchor>
                </div>
                
            </div>
        )
    }
}