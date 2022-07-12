const Greetings = (props) => {
  const { lang, children } = props;

  const greetingContent = () => {
    switch (lang) {
      case 'de':
        return 'Hallo';
      case 'fr':
        return 'Bonjour';
      case 'es':
        return 'Hola';
      default:
        return 'Hello';
    }
  };

  return (
    <div className="greetingsBox">
      <p>
        {greetingContent()} {children}
      </p>
    </div>
  );
};

export default Greetings;