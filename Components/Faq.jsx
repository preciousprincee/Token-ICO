import React from "react";

const Faq = () => {
  return (
  <section id="faq" className="faq pos-rel pt-140 pb-105">
    <div className="container">
      <div className="sec-title text-center mb-35">
        <h5 className="sec-title__subtitle">FAQ</h5>
        <h2 className="sec-title__title">
          Frequently asked questions
        </h2>

      </div>
      <div className="faq__wrap">
  <ul className="accordion_box clearfix">
    <li className="accordion block active-block">
      <div className="acc-btn">
        <span>QA: 01</span> What is the purpose of your ICO project?
      </div>
      <div className="acc_body current">
        <div className="content">
          <p>
            Our ICO project aims to create a decentralized platform that facilitates secure and transparent transactions. The project focuses on offering utility tokens that can be used within our ecosystem, ensuring seamless and efficient operations in the specified industry (e.g., supply chain or healthcare).
          </p>
          <ul>
            <li>Provides utility tokens for platform operations.</li>
            <li>Enhances transparency and efficiency in targeted industries.</li>
            <li>Supports the adoption of blockchain technology.</li>
          </ul>
          <p>
            By leveraging blockchain, the project addresses inefficiencies in traditional systems and introduces innovative solutions for businesses and individuals.
          </p>
        </div>
      </div>
    </li>
    <li className="accordion block">
      <div className="acc-btn">
        <span>QA: 02</span> How can users participate in the ICO?
      </div>
      <div className="acc_body">
        <div className="content">
          <p>
            Users can participate in the ICO by connecting their wallets to our platform and purchasing tokens. The process is secure, and tokens can be bought using cryptocurrency like Ether. Detailed instructions are provided on our platform to guide users through the process.
          </p>
          <ul>
            <li>Connect your wallet (e.g., Metamask).</li>
            <li>Choose the amount of tokens to purchase.</li>
            <li>Complete the transaction securely.</li>
          </ul>
          <p>
            Participating in the ICO allows users to gain early access to our platform's features and support the project's development.
          </p>
        </div>
      </div>
    </li>
    <li className="accordion block">
      <div className="acc-btn">
        <span>QA: 03</span> What are the key benefits of your ICO tokens?
      </div>
      <div className="acc_body">
        <div className="content">
          <p>
            The ICO tokens offer several benefits to holders, including access to platform services, discounts on transactions, and voting rights for governance decisions. These tokens are designed to incentivize user engagement and foster a strong community.
          </p>
          <ul>
            <li>Access to exclusive platform features.</li>
            <li>Reduced transaction fees for token holders.</li>
            <li>Governance participation through voting rights.</li>
          </ul>
          <p>
            Token holders will play a crucial role in shaping the project's future while benefiting from its ecosystem.
          </p>
        </div>
      </div>
    </li>
    <li className="accordion block">
      <div className="acc-btn">
        <span>QA: 04</span> How is the funding raised through the ICO utilized?
      </div>
      <div className="acc_body">
        <div className="content">
          <p>
            The funds raised through the ICO are allocated strategically to ensure the project's success. This includes platform development, marketing efforts, team expansion, and operational costs.
          </p>
          <ul>
            <li>Development of the platform and features.</li>
            <li>Marketing and community building.</li>
            <li>Team hiring and operational expenses.</li>
          </ul>
          <p>
            Transparency is a core value of our project, and regular updates will be provided to keep investors informed about the fund allocation and project progress.
          </p>
        </div>
      </div>
    </li>
  </ul>
</div>

    </div>
    <div className="faq__sec-shape">
      <div className="shape shape-1">
        <img src="assets/img/shape/s_shape1.png" alt="" />
      </div>
      <div className="shape shape-2">
        <img src="assets/img/shape/s_shape2.png" alt="" />
      </div>
      <div className="shape shape-3">
        <img src="assets/img/shape/s_shape3.png" alt="" />
      </div>
    </div>
    
  </section>
  );
};

export default Faq;
