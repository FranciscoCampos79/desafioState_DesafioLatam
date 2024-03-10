const SocialButton = ({icon, href='#', text}) => {
    return (
      <>
          <i className={icon} href={href}/>
          <p>{text}</p>
      </>
    );
  };
  
  export default SocialButton;