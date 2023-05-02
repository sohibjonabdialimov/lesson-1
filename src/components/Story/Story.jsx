import React from "react";
import user1 from '../../assets/img/user-1.png';
import user2 from '../../assets/img/user-2.png';
import user3 from '../../assets/img/user-3.png';

const Story = () => {
  return (
    <section className="story">
      <div className="container">
        <div className="story-content">
          <h2>
            Delivering real results for top companies. Some of our{" "}
            <span>success stories.</span>
          </h2>
          <ul className="story-list row">
            <li className="story-item">
              <p>
                {" "}
                “The team perfectly fit the specialized skill set required. They
                focused on the most essential features helping us launch the
                platform eight months faster than planned.”
              </p>
              <h4>Kady Baker</h4>
              <p>Product Manager at Bookmark</p>
              <img src={user1} alt="user" />
            </li>

            <li className="story-item">
              <p>
                {" "}
                “We needed to automate our entire onboarding process. The team
                came in and built out the whole journey. Since going live, user
                retention has gone through the roof!”
              </p>
              <h4>Aiysha Reese</h4>
              <p>Founder of Manage</p>
              <img src={user2} alt="user" />
            </li>

            <li className="story-item">
              <p>
                {" "}
                “Amazing. Our team helped us build an app that delivered a new
                experience for hiring a physio. The launch was an instant
                success with 100k downloads in the first month.”
              </p>
              <h4>Arthur Clarke</h4>
              <p>Co-founder of MyPhysio</p>
              <img src={user3} alt="user" />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Story;
