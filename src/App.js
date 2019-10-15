import React from 'react';
import Navigationbar from './Navigationbar.js'
import Projects from './projects.js'
import Translateme from './translateme.js'
import Rickandmorty from './rickandmorty.js'
import Tonester from './tonester.js'
import { Embed, Modal, Popup } from 'semantic-ui-react'
import './App.css';


const style = {
  borderRadius: 40,
  opacity: 1.7,
  padding: '1em',
}


class App extends React.Component {
    constructor(){
      super()
      this.state = {
        pageState: "home",
        open: false
      }
    }


    show = (dimmer) => () => this.setState({dimmer, open: true })
    close = () => this.setState({ open: false })
  
    show2 = (dimmer) => () => this.setState({dimmer, open2: true })
    close2 = () => this.setState({ open2: false })
  
    show3 = (dimmer) => () => this.setState({dimmer, open3: true })
    close3 = () => this.setState({ open3: false })

  handleModalClose=()=>{
    this.setState({ 
      open: false, 
      open2: false, 
      open3: false 
    })
  
  } 
  
  
  handleTranslateme=()=>{
    this.setState({
      pageState: "translateme"
    })
  }
  
  handleRickAndMorty=()=>{
    this.setState({
      pageState: "rickandmorty"
    })
  }

  handleTonester=()=>{
    this.setState({
      pageState: "tonester"
    })
  }

  handlePage=()=>{
    if(this.state.pageState === "translateme"){
      return <Translateme/> 
    }else if (this.state.pageState === "rickandmorty"){
      return <Rickandmorty/>
    }else if (this.state.pageState === "tonester"){
      return <Tonester/> 
    } else {
      return <Projects show={this.show} show2={this.show2} show3={this.show3} handleTranslateme={this.handleTranslateme} handleRickAndMorty={this.handleRickAndMorty} handleTonester={this.handleTonester}/>
    }
  }
 
  render(){
   
    const { open, dimmer } = this.state
        const { open2 } = this.state
        const { open3 } = this.state
  return (
    <div className="App">
      
     <Navigationbar close={this.handleModalClose} handleSection1={this.handleSectionOne}/>
    {this.handlePage()}

    <Modal basic dimmer={dimmer} open={open} onClose={this.close} animation={true}>
                    <Modal.Header><h2 >Translate Me</h2></Modal.Header>
                    <Modal.Content >
                        <Modal.Description>
                        <br></br>
                         <h2 class="translatemeContentModal">Translate me uses a machine learning technology to classify and translate images into different languages. Once the image is captured, users can flip the image to reveal the desired translated word for the image.</h2>
                        </Modal.Description>
                        <br></br>
                        <br></br>
                        <Embed
                            id='M7LLMVlS6hg'
                            placeholder='/assets/tranlatemebk.png'
                            source='youtube'
                        />
                        <br></br>
                        <br></br>
                        <h2 class="translatemeTitle">Technologies</h2>
                      
                        <div class="ui tablet equal width grid">
                            <div class="column">
                             <Popup flowing position='bottom center' style={style} inverted size='large' content='Ruby on Rails' trigger={<img class="techLogoTranslatMe" src="/assets/ruby.png"/> } />
                            </div>
                            <div class="column">
                            <Popup flowing position='bottom center' style={style} inverted size='large' content='React' trigger={<img class="techLogoTranslatMe" src="/assets/react.png"/>  } />
                            </div>
                            <div class="column">
                            <Popup flowing position='bottom center' style={style} inverted size='large' content='IBM Watson' trigger={<img class="techLogoTranslatMe" src="/assets/watson.png"/>  } />
                            </div>
                            <div class="column">
                            <Popup flowing position='bottom center' style={style} inverted size='large' content='Cloudinary' trigger={<img class="techLogo" src="/assets/cloudLogo.png"/> } />
                             </div>
                             <div class="column">
                            <Popup flowing position='bottom center' style={style} inverted size='large' content='Semantic ui' trigger={<img class="techLogo" src="/assets/semantic.png"/> } />
                             </div>
                            
                        </div>

                    </Modal.Content>
                   
                    </Modal>

                    <Modal basic dimmer={dimmer} open={open2} onClose={this.close2}>
                    <Modal.Header><h2 >Rick and Morty Adventures</h2></Modal.Header>
                    <Modal.Content >
                        <Modal.Description>
                        <br></br>
                         <h2 class="translatemeContentModal">Rick and Morty Adventures is an RPG game that allows you to play as Rick and capture different Morties. In addition, users have to look after each Morty they capture and help them level up by keeping them healthy and fed.</h2>
                        </Modal.Description>
                        <br></br>
                        <br></br>
                        <Embed
                            id='0KokNpVvjeA'
                            placeholder='/assets/rickandmortybk.png'
                            source='youtube'
                        />
                        <br></br>
                        <br></br>
                        <h2 class="translatemeTitle">Technologies</h2>
                      
                        <div class="ui tablet equal width grid">
                            <div class="column">
                             <Popup flowing position='bottom center' style={style} inverted size='large' content='Ruby on Rails' trigger={<img class="techLogoTranslatMe" src="/assets/ruby.png"/> } />
                            </div>
                            <div class="column">
                            <Popup flowing position='bottom center' style={style} inverted size='large' content='React' trigger={<img class="techLogoTranslatMe" src="/assets/react.png"/>  } />
                            </div>
                            <div class="column">
                            <Popup flowing position='bottom center' style={style} inverted size='large' content='Semantic ui' trigger={<img class="techLogo" src="/assets/semantic.png"/> } />
                             </div>
                            <div class="column">
                            <Popup flowing position='bottom center' style={style} inverted size='large' content='IBM Watson' />
                            </div>
                            <div class="column">
                            <Popup flowing position='bottom center' style={style} inverted size='large' content='Cloudinary' />
                             </div>
                             
                            
                        </div>

                    </Modal.Content>
                    <Modal.Actions>
                       
                    </Modal.Actions>
                    </Modal>

                    <Modal basic dimmer={dimmer} open={open3} onClose={this.close3}>
                    <Modal.Header><h2 >Tonester</h2></Modal.Header>
                    <Modal.Content >
                        <Modal.Description>
                        <br></br>
                         <h2 class="translatemeContentModal">Tonester allows users to save albums using Spotify’s API.</h2>
                        </Modal.Description>
                        <br></br>
                        <br></br>
                        <Embed
                            id='bQAIDucJ6Dk'
                            placeholder='/assets/tonesterbk.png'
                            source='youtube'
                        />
                        <br></br>
                        <br></br>
                        <h2 class="translatemeTitle">Technologies</h2>
                      
                        <div class="ui tablet equal width grid">
                            <div class="column">
                             <Popup flowing position='bottom center' style={style} inverted size='large' content='Ruby on Rails' trigger={<img class="techLogoTranslatMe" src="/assets/ruby.png"/> } />
                            </div>
                            <div class="column">
                            <Popup flowing position='bottom center' style={style} inverted size='large' content='JavaScript' trigger={<img class="techLogoTranslatMejs" src="/assets/js.png"/>  } />
                            </div>
                            <div class="column">
                            <Popup flowing position='bottom center' style={style} inverted size='small' content='Spotify' trigger={<img class="spotify" src="/assets/spotifylogo.png"/>  } />
                            </div>
                            <div class="column">
                            <Popup flowing position='bottom center' style={style} inverted size='large' content='Cloudinary'/>
                             </div>
                             <div class="column">
                            <Popup flowing position='bottom center' style={style} inverted size='large' content='Semantic ui'  />
                             </div>
                            
                        </div>

                    </Modal.Content>
                    <Modal.Actions>
                       
                    </Modal.Actions>
                    </Modal>
    </div>
  );
  }
}

export default App;
