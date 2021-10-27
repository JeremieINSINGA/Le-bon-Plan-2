import React, { Component } from "react";

export default class ProductPage extends Component {
  render() {
    return (
      <>
    

    <div class="container-fluid">
      <div class="row digi-header align-items-center">
        <div class="col text-light text-center">
          <h2>DigiStar</h2>
          <h3>Visez les étoiles</h3>
        </div>
      </div>

      <div class="row my-4">
        <div class="col-md-2"></div>
        <div class="col-md">
          <div class="card my-2">
            <img
              src="img/service1.jpg"
              class="card-img-top rounded-3"
              alt="Article"
            />
            <div class="card-body text-center">
              <div class="card-title"></div>
            </div>
          </div>
        </div>
        
        <div class="col-md-2"></div>
      </div>
      <div class="bg-light text-black">
        <div class="row py-2">
          
        </div>

        <div class="row my-2">
          <div class="col-md mx-4 my-5">
    Nom de l'article 
          </div>
          <div class="col-md-2 m-2">
            20 euros
          </div>
   
        </div>
      </div>

      <div class="row my-4">
        <div class="col"></div>
      </div>

      <div class="row my-4">
        <div class="col-md-2"></div>
        <div class="col-md">
          <div class="card my-2">
            
            <div class="card-body text-center">
              <div class="card-title">Fiche descriptive de l'article</div>
            </div>
          </div>
        </div>
        
        <div class="col-md-2"></div>
      </div>


        
           
     
        </div>

  
      </>
    );
  }
}
  

  

