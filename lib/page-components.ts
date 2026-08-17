import type { ComponentType } from 'react';
import AboutPage from '@/components/pages/about';
import BlogAgenticSystemsPage from '@/components/pages/blog-agentic-systems';
import BlogAICommercePage from '@/components/pages/blog-ai-commerce';
import BlogCognitiveInfrastructurePage from '@/components/pages/blog-cognitive-infrastructure';
import BlogIntelligentProcessPage from '@/components/pages/blog-intelligent-process';
import BlogLLMSecurityPage from '@/components/pages/blog-llm-security';
import BlogPage from '@/components/pages/blog';
import CaseStudiesPage from '@/components/pages/case-studies';
import CaseStudyEcommercePage from '@/components/pages/case-study-echocommerce';
import CaseStudyNovusPage from '@/components/pages/case-study-novus';
import CaseStudyViralGrowthPage from '@/components/pages/case-study-viralgrowth';
import ContactPage from '@/components/pages/contact';
import HomePage from '@/components/pages/home';
import IndustriesPage from '@/components/pages/industries';
import IndustryB2BEcommercePage from '@/components/pages/industry-b2b-ecommerce';
import IndustryB2BFinancePage from '@/components/pages/industry-b2b-finance';
import IndustryB2BSaaSPage from '@/components/pages/industry-b2b-saas';
import IndustryCommercialRealEstatePage from '@/components/pages/industry-commercial-real-estate';
import IndustryDigitalMarketingPage from '@/components/pages/industry-digital-marketing';
import IndustryLawFirmsPage from '@/components/pages/industry-law-firms';
import IndustryLogisticsPage from '@/components/pages/industry-logistics';
import IndustryManufacturingPage from '@/components/pages/industry-manufacturing';
import IndustryMedicalPracticesPage from '@/components/pages/industry-medical-practices';
import PrivacyPage from '@/components/pages/privacy';
import ProcessPage from '@/components/pages/process';
import ServiceAgenticAIPage from '@/components/pages/service-agentic-ai';
import ServiceAIAutomationsPage from '@/components/pages/service-ai-automations';
import ServiceAIIntegrationPage from '@/components/pages/service-ai-integration';
import ServiceAPIIntegrationsPage from '@/components/pages/service-api-integrations';
import ServiceLLMApplicationsPage from '@/components/pages/service-llm-applications';
import ServiceVerticalAIPage from '@/components/pages/service-vertical-ai';
import ServicesPage from '@/components/pages/services';
import TermsPage from '@/components/pages/terms';

export const pageComponents: Record<string, ComponentType> = {
  '': HomePage,
  about: AboutPage,
  blog: BlogPage,
  'blog-agentic-systems': BlogAgenticSystemsPage,
  'blog-ai-commerce': BlogAICommercePage,
  'blog-cognitive-infrastructure': BlogCognitiveInfrastructurePage,
  'blog-intelligent-process': BlogIntelligentProcessPage,
  'blog-llm-security': BlogLLMSecurityPage,
  'case-studies': CaseStudiesPage,
  'case-study-echocommerce': CaseStudyEcommercePage,
  'case-study-novus': CaseStudyNovusPage,
  'case-study-viralgrowth': CaseStudyViralGrowthPage,
  contact: ContactPage,
  industries: IndustriesPage,
  'industry-b2b-ecommerce': IndustryB2BEcommercePage,
  'industry-b2b-finance': IndustryB2BFinancePage,
  'industry-b2b-saas': IndustryB2BSaaSPage,
  'industry-commercial-real-estate': IndustryCommercialRealEstatePage,
  'industry-digital-marketing': IndustryDigitalMarketingPage,
  'industry-law-firms': IndustryLawFirmsPage,
  'industry-logistics': IndustryLogisticsPage,
  'industry-manufacturing': IndustryManufacturingPage,
  'industry-medical-practices': IndustryMedicalPracticesPage,
  privacy: PrivacyPage,
  process: ProcessPage,
  services: ServicesPage,
  'service-agentic-ai': ServiceAgenticAIPage,
  'service-ai-automations': ServiceAIAutomationsPage,
  'service-ai-integration': ServiceAIIntegrationPage,
  'service-api-integrations': ServiceAPIIntegrationsPage,
  'service-llm-applications': ServiceLLMApplicationsPage,
  'service-vertical-ai': ServiceVerticalAIPage,
  terms: TermsPage,
};
