import React, { useState } from 'react';
import Button from 'semantic-ui-react/dist/commonjs/elements/Button';
import Dropdown from 'semantic-ui-react/dist/commonjs/modules/Dropdown';
import Modal from 'semantic-ui-react/dist/commonjs/modules/Modal';
import useStore from 'store';
import styles from './About.module.scss';

const About: React.FC = () => {
  const appState = useStore((state) => state);
  const [show, setShow] = useState(false);

  const handleAbout = () => {
    appState.removeNew();
    setShow(true);
  };

  return (
    <Modal
      closeOnDimmerClick
      onClose={() => setShow(false)}
      open={show}
      trigger={
        <Dropdown.Item
          className={`${appState.newVersion !== '3.2.1' ? styles.newVersion : ''}`}
          icon="question"
          onClick={handleAbout}
          text={`About ${appState.newVersion !== '3.2.1' ? '(NEW)' : ''}`}
        />
      }
    >
      <Modal.Header>About</Modal.Header>
      <Modal.Content
        style={{
          display: 'flex',
          flexFlow: 'column nowrap',
          gap: '5px',
          maxHeight: '70vh',
        }}
      >
        <b>Changelog</b>
        <div style={{ overflow: 'auto' }}>
          <b>(Version 3.2.1)</b>
          <ul>
            <li>
              New buttons in footer and about section to support project. Completely <b>optional</b>
            </li>
            <li>The app will soon be available in the Playstore and Microsoft Store</li>
          </ul>
          <b>(Version 3.2.0)</b>
          <ul>
            <li>Rematch information for Elite 4 HGSS in badge details</li>
            <li>
              New alert for when there are more than 6 pokémon with <b>Team</b> status
            </li>
          </ul>
          <b>(Version 3.1.0)</b>
          <ul>
            <li>
              Using the pencil button on the encounter record your encounters with detailed
              information, including: level, gender, ability, nature, item and more!
            </li>
            <li>
              Evolve pokémon - button to the right of the pokémon name that lets you evolve or
              devolve
            </li>
            <li>
              Summary Tab in <b>PokéStats</b> - Includes downloadable and customizable summary image
            </li>
          </ul>
          <b>(Version 3.0.0)</b>
          <ul>
            <li>
              Gym leader details - New button that shows details of every gym leader. Located on the
              ( ? ) every badge
            </li>
            <li>
              Reworked encounter filters for all games. Deleted locations that had no droptables
              available. To see updated tables reset all encounters for selected game.
            </li>
            <li>Button to generate a random nickname from curated list</li>
            <li>New visual design for team section in PokéStats Tab</li>
          </ul>
          <b>(Version 2.7.0)</b>
          <ul>
            <li>
              Encounters now show accurate droptables, this can be turned off from <b>Settings</b>{' '}
              by showing all pokémon. <b>**IMPORTANT**</b> If you have visited this page before use
              the <b>Reset Button</b> to enable this feature. Note this will <b>delete</b> existing
              encounter data
            </li>
            <li>
              Set Pokemon Yellow, Emerald, Platinum, Black/White 2 different level caps from the
              <b> pencil</b> next to the game selector. In the emerging window, select an option
              from <b>Set Default</b>
            </li>
            <li>
              On smaller screens the options of add encounter, reset encounters and share can be
              found on the button on the lower right part of the screen
            </li>
          </ul>
          <b>(Version 2.6.0)</b>
          <ul>
            <li>
              Show only missing encounters by enabling the option in <b>Settings</b>
            </li>
            <li>Edit already created rules</li>
            <li>Now works offline!</li>
          </ul>
          <b>(Version 2.5.0)</b>
          <ul>
            <li>Share option is now a button inside the tracker</li>
            <li>
              New <b>Team</b> option in <b>Status</b> of pokémon. This links to the new Pokéstats
              Tab!
            </li>
            <li>
              Rules Tab - Create, edit and share custom rulesets for your nuzlocke or use some
              popular defaults
            </li>
            <li>
              PokéStats Tab - At a glance view of all captured, fainted, in-team, and failed to
              captured pokémon. Click on the pokémon to see more details!
            </li>
            <li>Duplicate pokémon alert no longer shows up on failed encounters</li>
          </ul>
          <b>(Version 2.4.0)</b>
          <ul>
            <li>More options to better report a bug or suggest a feature</li>
            <li>Disabled inputs and placeholder if no game is selected</li>
            <li>Sword and Shield edit level caps</li>
            <li>Custom game Reset all fix</li>
          </ul>
          <b>(Version 2.3.0)</b>
          <ul>
            <li>Report a bug or suggestion option!</li>
            <li>Edit level caps for base games - from the pencil next to the game select</li>
            <li>Nickname option for encounters - can be found in Settings</li>
            <li>Yellow level cap adjustments</li>
            <li>Several bug fixes related to eliminating encounter locations</li>
          </ul>
          <b>(Version 2.2.0)</b>
          <ul>
            <li>BW2 Easy/Normal/Challenge mode level caps - separated by slashes</li>
            <li>HGSS and GSC Level caps up till Red</li>
            <li>New share option for copy and pasting</li>
            <li>New settings option to enable duplicate clause - alerts on dupes!</li>
            <li>
              SWSH encounters/level caps bug fix - if it still does not appear please delete site
              cache from your browser (IMPORTANT this will delete your other encounters saved on the
              site)
            </li>
          </ul>
        </div>
        <div className={styles.credits}>
          <b>Credits:</b>
          <div>
            Images provided by{' '}
            <a href="https://bulbapedia.bulbagarden.net/wiki/Main_Page" title="Bulbapedia">
              Bulbapedia
            </a>
          </div>
          <div>
            Icons made by{' '}
            <a href="http://www.dariusdan.com" title="Darius Dan">
              Darius Dan
            </a>{' '}
            from{' '}
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>
          </div>
          <div>
            Icons made by{' '}
            <a href="http://www.roundicons.com" title="Roundicons Freebies">
              Roundicons Freebies
            </a>{' '}
            from{' '}
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>
          </div>
          <div>
            Icons made by{' '}
            <a href="https://www.flaticon.com/authors/nikita-golubev" title="Nikita Golubev">
              Nikita Golubev
            </a>{' '}
            from{' '}
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>
          </div>
          <div>
            Icons made by{' '}
            <a href="https://www.freepik.com" title="Freepik">
              Freepik
            </a>{' '}
            from{' '}
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>
          </div>
          <div>
            Icons made by{' '}
            <a href="https://www.flaticon.com/authors/vectors-market" title="Vectors Market">
              Vectors Market
            </a>{' '}
            from{' '}
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>
          </div>
          <div>
            Nickname list provided by{' '}
            <a href="https://www.findnicknames.com/pokemon-nicknames/" title="findnicknames">
              Find Nicknames
            </a>
          </div>
        </div>
        <div className={styles.support}>
          <a href="https://ko-fi.com/X8X05XBDC" rel="noreferrer" target="_blank">
            <img
              style={{ border: 0, height: 36 }}
              src="https://cdn.ko-fi.com/cdn/kofi2.png?v=3"
              alt="Buy Me a Coffee at ko-fi.com"
            />
          </a>
          <a className={styles.patron} href="https://www.patreon.com/bePatron?u=60585540">
            Become a Patron!
          </a>
        </div>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setShow(false)}>Close</Button>
      </Modal.Actions>
    </Modal>
  );
};

export default About;
