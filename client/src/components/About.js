import React, { useEffect } from 'react';
import styled from 'styled-components';
import { FaGavel, FaComments, FaRobot, FaHandshake } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutContainer = styled.div`
  min-height: 100vh;
  background-color: #f8f9fa;
`;

const HeroSection = styled.div`
  background: linear-gradient(135deg, #0061f2 0%, #00ba78 100%);
  color: white;
  padding: 100px 20px;
  text-align: center;
`;

const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const HeroFeatures = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-top: 30px;
`;

const Feature = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const FeaturesSection = styled.div`
  padding: 80px 20px;
  text-align: center;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 40px auto 0;
`;

const FeatureCard = styled.div`
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const FeatureIcon = styled.div`
  font-size: 2.5rem;
  color: #0061f2;
  margin-bottom: 20px;
`;

const BenefitsSection = styled.div`
  background-color: white;
  padding: 80px 20px;
  text-align: center;
`;

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 40px auto 0;
`;

const BenefitItem = styled.div`
  padding: 30px;
  border-radius: 10px;
  background: #f8f9fa;
`;

const StatsSection = styled.div`
  background: linear-gradient(135deg, #0061f2 0%, #00ba78 100%);
  color: rgb(3, 3, 3);
  padding: 60px 20px;
  display: flex;
  justify-content: center;
  gap: 60px;
  text-align: center;
  margin-top: 40px;
`;

const StatItem = styled.div`
  padding: 20px;
  min-width: 200px;
`;

const StatItemHeading = styled.h3`
  font-size: 2.5rem;
  margin-bottom: 10px;
  font-weight: bold;
`;

const StatItemParagraph = styled.p`
  font-size: 1.2rem;
  opacity: 0.9;
`;

function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <AboutContainer>
      <HeroSection>
        <h1>Online Dispute Resolution Platform</h1>
        <HeroContent>
          <h2>Transforming Conflict Resolution Through Technology</h2>
          <h5>Welcome to the future of dispute resolution. Our AI-powered platform provides a secure, efficient, and cost-effective way to resolve conflicts through professional mediation.</h5>
          <HeroFeatures>
            <Feature>✓ Quick Resolution</Feature>
            <Feature>✓ Professional Mediators</Feature>
            <Feature>✓ AI-Assisted Solutions</Feature>
          </HeroFeatures>
        </HeroContent>
      </HeroSection>

      <FeaturesSection>
        <h2 data-aos="fade-up">How It Works</h2>
        <FeaturesGrid>
          <FeatureCard data-aos="fade-up">
            <FeatureIcon>
              <FaGavel />
            </FeatureIcon>
            <h3>Submit Your Case</h3>
            <p>File your dispute and provide necessary details</p>
          </FeatureCard>
          <FeatureCard data-aos="fade-up" data-aos-delay="100">
            <FeatureIcon>
              <FaComments />
            </FeatureIcon>
            <h3>Connect with Parties</h3>
            <p>Communicate directly with the other party</p>
          </FeatureCard>
          <FeatureCard data-aos="fade-up" data-aos-delay="200">
            <FeatureIcon>
              <FaRobot />
            </FeatureIcon>
            <h3>AI-Powered Mediation</h3>
            <p>Get intelligent suggestions for dispute resolution</p>
          </FeatureCard>
          <FeatureCard data-aos="fade-up" data-aos-delay="300">
            <FeatureIcon>
              <FaHandshake />
            </FeatureIcon>
            <h3>Reach Agreement</h3>
            <p>Finalize resolution and generate formal agreement</p>
          </FeatureCard>
        </FeaturesGrid>
      </FeaturesSection>

      <BenefitsSection>
        <h2>Why Choose Us</h2>
        <BenefitsGrid>
          <BenefitItem>
            <h3>Fast Resolution</h3>
            <p>Resolve disputes quickly through our streamlined process</p>
          </BenefitItem>
          <BenefitItem>
            <h3>Cost Effective</h3>
            <p>Save time and money compared to traditional legal proceedings</p>
          </BenefitItem>
          <BenefitItem>
            <h3>Expert Support</h3>
            <p>Get assistance from our AI-powered mediation system</p>
          </BenefitItem>
        </BenefitsGrid>
      </BenefitsSection>

      <StatsSection data-aos="fade-up">
        <StatItem>
          <StatItemHeading>1000+</StatItemHeading>
          <StatItemParagraph>Cases Resolved</StatItemParagraph>
        </StatItem>
        <StatItem>
          <StatItemHeading>98%</StatItemHeading>
          <StatItemParagraph>Success Rate</StatItemParagraph>
        </StatItem>
        <StatItem>
          <StatItemHeading>24/7</StatItemHeading>
          <StatItemParagraph>Support Available</StatItemParagraph>
        </StatItem>
      </StatsSection>
    </AboutContainer>
  );
}

export default About;
