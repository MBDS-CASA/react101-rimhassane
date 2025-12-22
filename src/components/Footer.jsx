function Footer() {
  const annee = new Date().getFullYear();
  const prenom = "Rim";
  const nom = "Hassane";

  return (
    <footer className="footer">
      © {annee} - {prenom}.{nom}, Tous droits réservés.
    </footer>
  );
}

export default Footer;
