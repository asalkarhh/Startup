import smartSmsImage from '../assets/images/smartsms.jpeg';
import smartBillingImage from '../assets/images/smartbillingsystem.jpeg';

export const products = {
  'smart-sms': {
    slug: 'smart-sms',
    title: 'Smart SMS',
    tagline: 'Never let a customer call go unanswered.',
    category: 'Business Communication',
    summary: 'Smart SMS automatically responds after call interactions and includes a simple digital business profile website with a dedicated QR code for every installation.',
    description: 'Smart SMS is an automated customer communication platform built for businesses that depend on phone calls for leads and customer service. The Android application responds to every call interaction with a customized SMS containing contact details, a WhatsApp link, website, Google Maps location, social media links, offers, or any other important information. With every installation, we also create a simple business profile website and a dedicated digital QR code that customers can scan to quickly view and share the business details online.',
    benefits: [
      'Responds instantly even when a call is missed or cannot be attended',
      'Turns routine phone calls into structured lead-follow-up opportunities',
      'Shares WhatsApp, website, maps, social links, and offers automatically',
      'Includes a simple digital business profile website for every installation',
      'Provides a dedicated QR code customers can scan to open and share the business profile',
      'Creates a professional and consistent customer experience',
      'Saves staff time by removing repetitive manual messages',
      'Helps improve customer engagement, trust, and conversions',
    ],
    steps: [
      'Install Smart SMS on the business Android phone and provide the business details.',
      'We create the business profile website, dedicated QR code, and customized SMS templates.',
      'Choose which incoming, outgoing, missed, or rejected call events should trigger a message.',
      'Smart SMS responds automatically, while customers can scan or share the QR code to open the business profile.',
    ],
    idealFor: ['Retail stores', 'Service providers', 'Hospitals', 'Educational institutes', 'Real estate agents', 'Restaurants', 'Independent professionals', 'Small businesses'],
    formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSe7mEqKNCK9P6vMB2FHS5s4yrGQ0CWDnUK8YXLuxYDRmyRHUA/viewform',
    websiteUrl: 'https://www.smartsms.in/',
    theme: 'linear-gradient(135deg, #0f4c81 0%, #168aad 48%, #52b69a 100%)',
    icon: 'sms',
    image: smartSmsImage,
  },
  'smart-billing': {
    slug: 'smart-billing',
    title: 'Smart Billing System',
    ctaTitle: 'Smart Billing',
    tagline: 'Create, collect, and share bills in seconds.',
    category: 'Billing & Payments',
    summary: 'Smart Billing creates professional invoices, generates UPI QR codes, organizes customer records, and shares digital bills through WhatsApp in one click.',
    description: 'Smart Billing is a digital billing and invoice management solution designed to simplify everyday billing for businesses of all sizes. It replaces slow paperwork with a faster workflow for creating invoices, accepting QR-based payments, maintaining invoice history, managing customers, and sharing bills digitally.',
    benefits: [
      'Creates accurate, professional invoices within seconds',
      'Generates UPI QR codes for quick digital payments',
      'Shares bills directly with customers through WhatsApp',
      'Keeps invoice history and customer records organized',
      'Supports multilingual billing for diverse customers',
      'Reduces paperwork, billing errors, and transaction time',
    ],
    steps: [
      'Add the business and customer billing details.',
      'Select products or services and generate the invoice.',
      'Let the system create a payment-ready UPI QR code.',
      'Share the completed digital bill with the customer through WhatsApp.',
    ],
    idealFor: ['Retail stores', 'Wholesalers', 'Restaurants', 'Medical shops', 'Service centers', 'Freelancers', 'Small businesses', 'Independent professionals'],
    formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLScS30_VZgHCBrvFnvHGfX01aRoPIbmRI8HB6ZBHmVWwQ3mB7A/viewform',
    websiteUrl: 'https://billingwala-trials.vercel.app/',
    theme: 'linear-gradient(135deg, #4c1d95 0%, #7c3aed 48%, #c026d3 100%)',
    icon: 'billing',
    image: smartBillingImage,
  },
};

export const productList = Object.values(products);
