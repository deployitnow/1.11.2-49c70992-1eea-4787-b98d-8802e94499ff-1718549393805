import { Button } from '@/components/shared/ui/button';
import Header from '@/components/shared/Header';
import { LandingPrimaryTextCtaSection } from '@/components/landing/cta/LandingPrimaryCta';
import { LandingProductHuntAward } from '@/components/landing/social-proof/LandingProductHuntAward';
import { LandingSocialProof } from '@/components/landing/social-proof/LandingSocialProof';
import { LandingDiscount } from '@/components/landing/discount/LandingDiscount';
import { ComponentDemo } from 'demo/demo';
import { LandingProductFeature } from '@/components/landing/LandingProductFeature';
import { LandingProductFeatureKeyPoints } from '@/components/landing/LandingProductFeatureKeyPoints';
import { LandingSaleCtaSection } from '@/components/landing/cta/LandingSaleCta';
import { LandingTestimonialGrid } from '@/components/landing/testimonial/LandingTestimonialGrid';
import { LandingBandSection } from '@/components/landing/LandingBand';
import { LandingTestimonialReadMoreWrapper } from '@/components/landing/testimonial/LandingTestimonialReadMoreWrapper';
import { LandingFeatureList } from '@/components/landing/feature/LandingFeatureList';
import { LandingFaqCollapsibleSection } from '@/components/landing/LandingFaqCollapsible';
import { LandingSocialProofBand } from '@/components/landing/social-proof/LandingSocialProofBand';
import { LandingSocialProofBandItem } from '@/components/landing/social-proof/LandingSocialProofBandItem';

import {
  ChromeIcon,
  FigmaIcon,
  FramerIcon,
  GithubIcon,
  LayersIcon,
  LightbulbIcon,
  LineChartIcon,
  SparklesIcon,
  ThumbsUpIcon,
  ZapIcon,
} from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col w-full items-center fancy-overlay">
      <LandingSocialProofBand invert={false} className="hidden md:flex">
        <LandingSocialProofBandItem>
          Fast, reliable, and secure
        </LandingSocialProofBandItem>

        <LandingSocialProofBandItem>
          Easy to use, easy to love
        </LandingSocialProofBandItem>

        <LandingSocialProofBandItem graphic="rating">
          99% customer satisfaction
        </LandingSocialProofBandItem>
      </LandingSocialProofBand>

      <Header className="mb-0 lg:mb-0" />

      <LandingPrimaryTextCtaSection
        title="Uniting the World's Best AI Platforms"
        description="Multiple AI platforms work together to make sure your needs are met perfectly every time. Just type. Its that simple."
        textPosition="left"
        withBackground
        leadingComponent={<LandingProductHuntAward />}
      >
        <Button size="xl" asChild>
          <a href="/signup">Get Started</a>
        </Button>

        <LandingDiscount
          discountValueText="30% off"
          discountDescriptionText="for the first 10 customers (2 left)"
        />

        <LandingSocialProof
          className="w-full mt-12"
          showRating
          numberOfUsers={99}
          suffixText="happy users"
          avatarItems={[
            {
              imageSrc: 'https://picsum.photos/id/64/100/100',
              name: 'John Doe',
            },
            {
              imageSrc: 'https://picsum.photos/id/65/100/100',
              name: 'Jane Doe',
            },
            {
              imageSrc: 'https://picsum.photos/id/669/100/100',
              name: 'Alice Doe',
            },
          ]}
        />
      </LandingPrimaryTextCtaSection>

      <LandingProductFeature
        title="Adaptable Intelligence"
        descriptionComponent={
          <>
            <LandingProductFeatureKeyPoints
              keyPoints={[
                {
                  title: 'Unified Control Panel',
                  description:
                    'Manage multiple AI platforms from one streamlined space, eliminating the need to switch between different interfaces.',
                },
                {
                  title: 'Intelligent Platform Mapping',
                  description:
                    'Spider AI studies your requirements to expertly route your queries to the AI platform best equipped to handle them.',
                },
                {
                  title: 'Cross-platform Integration',
                  description:
                    'Merge the capabilities of various AI platforms to generate multi-faceted, blended solutions.',
                },
              ]}
            />

            <Button asChild>
              <a href="/signup">Get Started</a>
            </Button>

            <p className="text-sm">
              7 day free trial, no credit card required.
            </p>
          </>
        }
        imageSrc="/static/images/backdrop-19.webp"
        imageAlt="Screenshot of the product"
        imagePosition="left"
        imagePerspective="none"
      />

      <LandingProductFeature
        title="Convenience Amplified"
        descriptionComponent={
          <>
            <p>
              Spider AI's offerings are intuitive and user-friendly. Choose your
              command, type it, and let our AI cluster of multiple platforms
              take care of the task. Its simplicity of use is what sets Spider
              AI apart, making it perfect even for tech novices.
            </p>

            <LandingProductFeatureKeyPoints
              keyPoints={[
                {
                  title: 'Responsive UI',
                  description:
                    'Our user-friendly interface is designed for ease of use and seamless interactions, making operations a breeze.',
                },
                {
                  title: 'Technological Agnostic',
                  description:
                    'Operate across platforms of all kinds - an agnostic approach to technology that ensures compatibility and flexibility.',
                },
                {
                  title: 'Assured Security',
                  description:
                    'We prioritize your safety. Our robust security protocols ensure your data never falls into the wrong hands.',
                },
              ]}
            />

            <Button asChild>
              <a href="/signup">Get Started</a>
            </Button>

            <p className="text-sm">Get started with our free tier.</p>
          </>
        }
        imageSrc="/static/images/backdrop-20.webp"
        imageAlt="Screenshot of the product"
        imagePosition="right"
        imagePerspective="none"
        withBackground
        withBackgroundGlow
        variant="secondary"
        backgroundGlowVariant="secondary"
      />

      <LandingProductFeature
        title="Advanced Integration"
        descriptionComponent={
          <>
            <p>
              With Spider AI's sophisticated, fully-integrated system,
              heterogeneous AI platforms converge to deliver top-notch results
              across an array of tasks. Powered by state-of-the-art technology,
              Spider AI guarantees a flawless performance every time.
            </p>

            <Button asChild>
              <a href="/signup">Get Started</a>
            </Button>

            <p className="text-sm">First month is on us.</p>
          </>
        }
        imageSrc="/static/images/backdrop-5.webp"
        imageAlt="Screenshot of the product"
        imagePosition="left"
        imagePerspective="none"
        variant="secondary"
      />

      <LandingBandSection
        title="4.9/5 stars"
        description="Our customers love our product."
        supportingComponent={
          <LandingSocialProof
            showRating
            numberOfUsers={99}
            avatarItems={[
              {
                imageSrc: 'https://picsum.photos/id/64/100/100',
                name: 'John Doe',
              },
              {
                imageSrc: 'https://picsum.photos/id/65/100/100',
                name: 'Jane Doe',
              },
              {
                imageSrc: 'https://picsum.photos/id/669/100/100',
                name: 'Alice Doe',
              },
            ]}
          />
        }
      />

      <LandingProductFeature
        title="Simplify Everything"
        descriptionComponent={
          <>
            Experience the unique fusion of multiple AI platforms working
            seamlessly together.
            <Button asChild>
              <a href="/signup">Get Started</a>
            </Button>
          </>
        }
        withBackground
        variant="secondary"
        imageSrc="/static/images/product-sample.webp"
        imageAlt="Screenshot of the product"
        imagePosition="center"
        textPosition="center"
      />

      <LandingSaleCtaSection
        title="Join the Spider Revolution"
        description="Experience the future of AI with Spider AI. Opt for a simplified, unified approach to meeting your needs with our cutting-edge technology. Discover infinitely better solutions for your challenges. Join Spider AI today, and take the first step towards a smarter tomorrow."
        ctaHref={'#'}
        ctaLabel={'Pre-order now'}
        withBackgroundGlow
      />

      <LandingTestimonialReadMoreWrapper size="md">
        <LandingTestimonialGrid
          title="Hear from Our Satisfied Users"
          description="Countless people across various industries have trusted Spider AI's suite of intelligent platforms. They have experienced firsthand how our smart systems add value, taking their operations to a higher echelon of success."
          testimonialItems={[
            {
              name: 'Sarah Thompson, Tech Lead - StellarSoft',
              text: 'Spider AI is consistently excellent. It has the unique ability to understand individual needs, making it much easier to meet targets. Its simplicity is just icing on the cake.',
              handle: '@sarah_thompson, tech lead - stellarsoft',
              imageSrc: 'https://picsum.photos/id/64/100/100',
            },
            {
              name: 'John Allard, Data Analyst - AstroCorp',
              text: 'The gathering and processing of data have never been this straightforward. With Spider AI, my team and I can focus on making data-driven decisions, faster and better.',
              handle: '@john_allard, data analyst - astrocorp',
              imageSrc: 'https://picsum.photos/id/65/100/100',
            },
            {
              name: 'Dr. Lily Evans, Research Head - NanoDynamics',
              text: 'In the world of scientific research, precision matters. Spider AI empowers us with remarkable accuracy and efficiency – a game-changer indeed.',
              handle: '@dr._lily evans, research head - nanodynamics',
              imageSrc: 'https://picsum.photos/id/669/100/100',
              featured: true,
            },
            {
              name: 'Markus Lee, Digital Marketing Specialist - VisionWave',
              text: "The Spider AI's power to integrate multiple platforms is phenomenal. Now, we can create more strategic campaigns, boost engagement, and track results seamlessly.",
              handle: '@markus_lee, digital marketing specialist - visionwave',
              imageSrc: 'https://picsum.photos/id/829/100/100',
            },
            {
              name: 'Claire Russo, Operations Manager - FlowMatrix',
              text: "What sets Spider AI apart? Its ability to deliver consistently good results coupled with a user-friendly interface. It's a solid choice!",
              handle: '@claire_russo, operations manager - flowmatrix',
              imageSrc: 'https://picsum.photos/100/100.webp?random=2',
            },
            {
              name: 'Aiden Daniels, CIO - QuantumTechnologies',
              text: 'Spider AI has been a game-changer in our organizational approach to challenges. The integration of various AI platforms has streamlined our working strategies like never before.',
              handle: '@aiden_daniels, cio - quantumtechnologies',
              imageSrc: 'https://picsum.photos/100/100.webp?random=3',
            },
          ]}
          withBackgroundGlow
          withBackground
        />
      </LandingTestimonialReadMoreWrapper>

      <LandingFeatureList
        title="Master the AI Landscape with Spider AI"
        description="Tame the mighty world of diverse AI platforms and weave the perfect web of solutions with Spider AI. Command, coordinate, and control multiple AI platforms from one central hub to fulfill all your AI needs meticulously. Don't navigate. Simply type. It's truly that straightforward."
        featureItems={[
          {
            title: 'Unified Control Panel',
            description:
              'Manage multiple AI platforms from one streamlined space, eliminating the need to switch between different interfaces.',
            icon: <LayersIcon />,
          },
          {
            title: 'Intelligent Platform Mapping',
            description:
              'Spider AI studies your requirements to expertly route your queries to the AI platform best equipped to handle them.',
            icon: <LineChartIcon />,
          },
          {
            title: 'Cross-platform Integration',
            description:
              'Merge the capabilities of various AI platforms to generate multi-faceted, blended solutions.',
            icon: <SparklesIcon />,
          },
          {
            title: 'Responsive UI',
            description:
              'Our user-friendly interface is designed for ease of use and seamless interactions, making operations a breeze.',
            icon: <LightbulbIcon />,
          },
          {
            title: 'Technological Agnostic',
            description:
              'Operate across platforms of all kinds - an agnostic approach to technology that ensures compatibility and flexibility.',
            icon: <ZapIcon />,
          },
          {
            title: 'Assured Security',
            description:
              'We prioritize your safety. Our robust security protocols ensure your data never falls into the wrong hands.',
            icon: <ThumbsUpIcon />,
          },
          {
            title: 'Insightful Analytics',
            description:
              'Study platform performance and gain key insights with our detailed analytics and reporting features.',
            icon: <ChromeIcon />,
          },
          {
            title: 'Adaptable Solutions',
            description:
              'Our system adapts to your evolving needs, growing with your business and scaling to keep pace with your ambitions.',
            icon: <FigmaIcon />,
          },
          {
            title: 'Efficient Resource Management',
            description:
              'Optimize resource utilization for superior performance, navigating AI needs with precision, speed, and economy.',
            icon: <FramerIcon />,
          },
        ]}
      />

      <LandingFaqCollapsibleSection
        title="Frequently Asked Questions about Spider AI"
        description="Welcome to our FAQ section - a quick way to get meaningful answers to your pressing queries around Spider AI and multi-platform AI integration."
        faqItems={[
          {
            question: 'What makes Spider AI stand out from other AI solutions?',
            answer:
              "Spider AI is not just a solitary solution. It's an integrated hub that fosters communication between various AI platforms. Rather than offering a lone voice in the AI wilderness, we bring together the best of advanced AI technologies. This diversity ensures an adaptable, resilient system that's tailored to meet your needs every time, with no more than a simple typing request.",
          },
          {
            question: 'How easy it is to use Spider AI?',
            answer:
              "Simplicity is at the heart of our design. If you can type, you can tap into the power of Spider AI. Whether you're a seasoned expert or an AI novice, our platform is tailored to provide an advanced yet user-friendly experience.",
          },
          {
            question: 'How can Spider AI improve my business operations?',
            answer:
              'Spider AI optimizes your operations by delivering multiplicative value. Through integrated platforms, Spider AI can deliver a multitude of solutions suited to different business challenges. Also, the breadth of platforms hosted by Spider AI ensures round-the-clock support and diversity of expertise, ensuring that your operations are always running at their best.',
          },
        ]}
        withBackground
      />

      <div className="w-full flex flex-col items-center gap-8 md:gap-16">
        <section className="ultrawide-container">
          <ComponentDemo />
        </section>
      </div>
    </div>
  );
}
