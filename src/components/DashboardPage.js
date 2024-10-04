
import React from 'react';
import './DashboardPage.css';
import Logo5 from '../images/logo192.png';

const DashboardPage = () => {
  return (
    <div className="dashboard-container">
      <header>
        <img src={Logo5} className="logo5" />
        <h1>Welcome to BodyBliss!</h1>
      </header>
      <main>
        <section className="stats-section">
          <h2>Your Progress</h2>
          <ul>
            <li>
              <span>Workouts completed:</span>
              <span>10</span>
            </li>
            <li>
              <span>Steps taken:</span>
              <span>10,000</span>
            </li>
            <li>
              <span>Calories burned:</span>
              <span>500</span>
            </li>
          </ul>
          <button className="view-details-button">View Details</button>
        </section>
        <section className="goals-section">
          <h2>Your Goals</h2>
          <ul>
            <li>
              <span>Run 3 times a week</span>
              <span>Progress: 50%</span>
              <progress value="50" max="100" />
            </li>
            <li>
              <span>Eat 5 servings of fruits and veggies daily</span>
              <span>Progress: 75%</span>
              <progress value="75" max="100" />
            </li>
          </ul>
          <button className="add-goal-button">Add Goal</button>
        </section>
        <section className="recommendations-section">
          <h2>Recommended Workouts</h2>
          <ul>
            <li>
              <span>Yoga for Beginners</span>
              <span>Duration: 30 minutes</span>
              <button className="start-workout-button">Start</button>
            </li>
            <li>
              <span>HIIT Cardio</span>
              <span>Duration: 45 minutes</span>
              <button className="start-workout-button">Start</button>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default DashboardPage;



