import HelpBox from './HelpBox';
import './HelpArea.css';

const HELP_ITEMS = [
  {
    id: 'h1',
    title: 'What is Git?',
    text: 'Git is a version control system, helping you to manage your code and create code snapshots.',
  },
  {
    id: 'h2',
    title: 'What is GitHub?',
    text: 'GitHub is a cloud-based platform for hosting, managing, and collaborating on software projects using Git, the most widely used version control system',
  },
  {
    id: 'h3',
    title: 'What is GitHub Actions?',
    text: 'GitHub Actions is an automation service (or CI / CD service) that helps you automate repository-related workflows and processes.',
  },
];

function HelpArea() {
  return (
    <section data-testid="help-area" id="help-area">
      {HELP_ITEMS.map((item) => (
        <HelpBox key={item.id} title={item.title} text={item.text} />
      ))}
    </section>
  );
}

export default HelpArea;
