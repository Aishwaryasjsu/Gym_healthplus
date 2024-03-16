import React from "react";
import { ClassCard } from "./ClassCard";
import "../css/Membership.css"; // Import the CSS file

const MembershipPlans = () => {
    return (
        <section className="membership-plans-section ftco-section ftco-pricing">
            <div className="container">
                <div className="row justify-content-center mb-5">
                    <div className="col-md-7 text-center heading-section ftco-animate">
                        <span className="subheading">Pricing</span>
                        <h2 className="mb-4">Membership Plans</h2>
                    </div>
                </div>
                    <ClassCard />
                </div>
        </section>
    );
};

export default MembershipPlans;
