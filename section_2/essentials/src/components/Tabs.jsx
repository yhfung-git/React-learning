const Tabs = ({ children, buttons, Container = "menu" }) => {
  return (
    <>
      <Container>{buttons}</Container>
      {children}
    </>
  );
};

export default Tabs;
