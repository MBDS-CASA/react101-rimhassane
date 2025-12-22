function Footer() {
  const annee = new Date().getFullYear();
  const prenom = "TonPrenom";
  const nom = "TonNom";

  return (
    <footer className="footer">
      © {annee} - {prenom}.{nom}, Tous droits réservés.
    </footer>
  );
}

export default Footer;
