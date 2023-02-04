import React from "react";
import "./HowItWorks.css";

const HowItWorks = () => {
  return (
    <div>
      <div class="section-how">
        <div class="container-how">
          <span class="subheading">How it works</span>
          <h2 class="heading-secondary">
            Get your salon reserved in 3 simple steps
          </h2>
        </div>

        <div class="container-how grid-how">
          <div class="step-text-box">
            <p class="step-number">01</p>
            <h3 class="heading-tertiary">Locate a salon of your choice</h3>
            <p class="step-description">
              Never again waste time thinking about what to eat! Omnifood AI
              will create a 100% personalized weekly meal plan just for you. It
              makes sure you get all the nutrients and vitamins you need, no
              matter what diet you follow!
            </p>
          </div>
          <div class="step-img-box">
            <img
              src="https://www.codefencers.com/libraries/CodeFencers/images/work/saloonisto/main-screen-02.png"
              class="step-img "
              alt="iPhone app
        preferences selection screen"
            />
          </div>

          <div class="step-img-box">
            <img
              src="https://www.codefencers.com/libraries/CodeFencers/images/work/saloonisto/main-screen-06.png"
              class="step-img"
              alt="iPhone app
        meal approving plan screen"
            />
          </div>
          <div class="step-text-box">
            <p class="step-number">02</p>
            <h3 class="heading-tertiary">
              Select the type of the service you want
            </h3>
            <p class="step-description">
              Once per week, approve the meal plan generated for you by Omnifood
              AI. You can change ingredients, swap entire meals, or even add
              your own recipes.
            </p>
          </div>

          <div class="step-text-box">
            <p class="step-number">03</p>
            <h3 class="heading-tertiary">Get your slot scheduled</h3>
            <p class="step-description">
              Best chefs in town will cook your selected meal every day, and we
              will deliver it to your door whenever works best for you. You can
              change delivery schedule and address daily!
            </p>
          </div>
          <div class="step-img-box">
            <img
              src="https://www.codefencers.com/libraries/CodeFencers/images/work/saloonisto/main-screen-04.png"
              class="step-img "
              alt="iPhone app
        delivery screen"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
