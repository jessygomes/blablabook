export default function Footer() {
  return (
    <footer className="wrapper bg-linear-to-r from-primary/50 to-second/50 text-noir py-16 gap-2 flex w-full justify-between">
      <div className="w-1/3 gap-2 mb-4 border-r border-black px-5 ">
        <h3 className="tracking-wider mb-4 text-base font-bold">Contacts</h3>
        <ul className="list-none text-sm">
          <li className="flex flex-row items-start mb-2 gap-4">
            <div>
              <span className="material-icons  text-[16px]!">home</span>
            </div>
            <div>
              10 rue de Penthièvre
              <br />
              75008 Paris
            </div>
          </li>
          <li className="flex flex-row items-center mb-2 gap-4">
            <div>
              <span className="material-icons  text-[16px]!">mail</span>
            </div>
            <div>info.example@blablabook.fr</div>
          </li>
          <li className="flex flex-row items-center mb-2 gap-4">
            <div>
              <span className="material-icons text-[16px]!">call</span>
            </div>
            <div>+33 1 23 45 67 89</div>
          </li>
        </ul>
      </div>
      <div className="w-2/3 px-5">
        <h3 className="tracking-wider mb-4 font-bold text-base">
          Informations Légales
        </h3>
        <ul className="list-none text-sm">
          <li>Mentions légales</li>
          <li>Politique de confidentialité</li>
        </ul>
      </div>
    </footer>
  );
}
