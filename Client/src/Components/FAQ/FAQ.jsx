import React, { useState } from 'react';
import './FAQ.css';
import 'aos/dist/aos.css';

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How do I know which accessories are compatible with my device?",
      answer: "Each product page provides detailed compatibility information, including device model numbers and specifications. If you're unsure, feel free to contact our support team for assistance."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept major credit and debit cards, PayPal, and mobile payment options such as Google Pay and Apple Pay."
    },
    {
      question: "How can I track my order?",
      answer: "Once your order is shipped, you'll receive an email with a tracking number. You can use this number to track your order status on the courier’s website."
    },
    {
      question: "Are the products authentic or original?",
      answer: "Yes, all products sold on our site are 100% authentic and come with a manufacturer’s warranty."
    },
    {
      question: "How do I return a product?",
      answer: "You can return most products within 30 days of receiving them. Simply visit our returns page, fill out the form, and we'll guide you through the process."
    },
    {
      question: "What is the shipping time for accessories?",
      answer: "Standard shipping typically takes 3-5 business days. Express shipping options are also available for quicker delivery."
    },
    {
      question: "Do you offer gift cards?",
      answer: "Yes, we offer electronic gift cards that can be used on our website for any purchase."
    },
    {
      question: "Can I get a discount if I buy in bulk?",
      answer: "Yes, we offer discounts on bulk purchases. Contact our sales team for more information and to get a custom quote."
    },
    {
      question: "Is there customer support available for product installation?",
      answer: "Our customer support team is available via chat, email, or phone to assist with any installation questions or issues."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we offer international shipping to most countries. Shipping rates and times vary depending on the destination."
    }
  ];

  return (
    <div className="faq-section" data-aos="zoom-in-up">
      <h2>Frequently Asked Questions</h2>
      <p>Find answers to common questions about shopping with us!</p>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            onClick={() => handleToggle(index)}
          >
            <div className="faq-question">
              <span className="plus-minus">{activeIndex === index ? '-' : '+'}</span>
              {faq.question}
            </div>
            {activeIndex === index && <div className="faq-answer">{faq.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
