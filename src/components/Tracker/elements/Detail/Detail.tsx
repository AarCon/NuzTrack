import { ABILITIES } from '@smogon/calc';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import Button from 'semantic-ui-react/dist/commonjs/elements/Button';
import Icon from 'semantic-ui-react/dist/commonjs/elements/Icon';
import Input from 'semantic-ui-react/dist/commonjs/elements/Input';
import Checkbox from 'semantic-ui-react/dist/commonjs/modules/Checkbox';
import Dropdown from 'semantic-ui-react/dist/commonjs/modules/Dropdown';
import Modal from 'semantic-ui-react/dist/commonjs/modules/Modal';
import { ItemSelector, PkmImage } from 'common';
import { MoveSelector, Natures, PokemonType } from 'components';
import { GENDERS } from 'constants/constant';
import NATURES from 'constants/natures';
import { POKEMAP } from 'constants/pokemon';
import type { Gender, TEncounter } from 'constants/types';
import useStore from 'store';
import dropdownStyles from 'assets/styles/Dropdown.module.scss';
import styles from './Detail.module.scss';

interface DetailProps {
  encounter?: TEncounter;
}

function Detail({ encounter }: DetailProps): JSX.Element {
  const { t } = useTranslation('tracker');
  const darkMode = useStore(useCallback((state) => state.darkMode, []));
  const changeDetails = useStore(useCallback((state) => state.changeDetails, []));
  const exportTeamMember = useStore(useCallback((state) => state.exportTeamMember, []));
  const exportToGame = useStore(useCallback((state) => state.exportToGame, []));
  const selectedGame = useStore(useCallback((state) => state.selectedGame, []));
  const gamesList = useStore(useCallback((state) => state.gamesList, []));
  const foundPokemon = POKEMAP.get(encounter.pokemon);
  const [show, setShow] = useState(false);
  const [level, setLevel] = useState(encounter?.details?.level);
  const [metLevel, setMetLevel] = useState(encounter?.details?.metLevel);
  const [gender, setGender] = useState(encounter?.details?.gender);
  const [ability, setAbility] = useState(encounter?.details?.ability);
  const [nature, setNature] = useState(encounter?.details?.nature);
  const [item, setItem] = useState(encounter?.details?.item);
  const [faint, setFaint] = useState(encounter?.details?.faint);
  const [moveOne, setMoveOne] = useState(encounter?.details?.moves[0]);
  const [moveTwo, setMoveTwo] = useState(encounter?.details?.moves[1]);
  const [moveThree, setMoveThree] = useState(encounter?.details?.moves[2]);
  const [moveFour, setMoveFour] = useState(encounter?.details?.moves[3]);
  const [shiny, setShiny] = useState(encounter?.details?.shiny);

  const handleClose = () => {
    setShow(false);
    setLevel(encounter?.details?.level);
    setMetLevel(encounter?.details?.metLevel);
    setGender(encounter?.details?.gender);
    setAbility(encounter?.details?.ability);
    setNature(encounter?.details?.nature);
    setItem(encounter?.details?.item);
    setFaint(encounter?.details?.faint);
    setMoveOne(encounter?.details?.moves[0]);
    setMoveTwo(encounter?.details?.moves[1]);
    setMoveThree(encounter?.details?.moves[2]);
    setMoveFour(encounter?.details?.moves[3]);
    setShiny(encounter?.details?.shiny);
  };

  const handleSave = () => {
    changeDetails(
      encounter.id,
      level,
      metLevel,
      gender,
      ability,
      nature,
      item,
      faint,
      moveOne,
      moveTwo,
      moveThree,
      moveFour,
      shiny
    );
    setShow(false);
  };

  const handleExport = () => {
    exportTeamMember({
      ability,
      id: encounter.pokemon,
      level,
      item,
      nature,
      moves: [moveOne, moveTwo, moveThree, moveFour],
    });
    toast.success(t('pokemon_export'));
  };

  const handleGameExport = (game: string) => {
    if (game !== selectedGame?.value) {
      exportToGame(encounter, game, `From ${selectedGame?.text} - ${new Date().toLocaleString()}`);
      handleClose();
      toast.success(t('pokemon_export'));
    }
  };

  return (
    <Modal
      open={show}
      trigger={
        <Button
          aria-label="edit encounter"
          basic
          compact
          data-testid={`edit-encounter-${encounter.id}`}
          icon
          inverted={darkMode}
          onClick={() => setShow(true)}
          type="button"
        >
          <Icon name="pencil" />
        </Button>
      }
    >
      <Modal.Content className={styles.content} scrolling>
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <div className={styles.image}>
              <PkmImage name={foundPokemon?.text} shiny={shiny} />
            </div>
            <span className={styles.name}>{foundPokemon.text}</span>
          </div>
          <PokemonType pokemon={foundPokemon} />
        </div>
        <details open>
          <summary data-testid="detail-summary">{t('details', { ns: 'badges' })}</summary>
          <div className={styles.expandable}>
            <Input
              className={styles.input}
              data-testid="level"
              maxLength={3}
              label={t('level', { ns: 'rules' })}
              onChange={(e, data) => setLevel(Number(data.value))}
              value={level}
            />
            <Input
              className={styles.input}
              data-testid="metlevel"
              label={t('met_level')}
              maxLength={3}
              onChange={(e, data) => setMetLevel(Number(data.value))}
              value={metLevel}
            />
            <Dropdown
              aria-label="gender-selector"
              className={dropdownStyles.dropdown}
              clearable
              data-testid="gender"
              inline
              lazyLoad
              onChange={(e, data) => setGender(data.value as unknown as Gender)}
              options={GENDERS}
              placeholder={t('gender', { ns: 'calculator' })}
              selection
              value={gender ?? ''}
            />
            <div className={styles.natureContainer}>
              <Dropdown
                aria-label="nature-selector"
                className={dropdownStyles.dropdown}
                clearable
                data-testid="nature"
                inline
                lazyLoad
                onChange={(e, data) => setNature(data.value as unknown as string)}
                options={NATURES}
                placeholder={t('select_nature', { ns: 'calculator' })}
                search
                selection
                value={nature ?? ''}
              />
              <Natures />
            </div>
            <Dropdown
              aria-label="ability"
              className={dropdownStyles.dropdown}
              clearable
              data-testid="ability"
              inline
              lazyLoad
              onChange={(e, data) => setAbility(data.value as unknown as string)}
              options={[...new Set(ABILITIES[8])].map((smogonAbility) => {
                return { text: smogonAbility, value: smogonAbility };
              })}
              placeholder={t('select_ability', { ns: 'calculator' })}
              search
              selection
              value={ability ?? ''}
            />
            <ItemSelector item={item} onChange={(newItem) => setItem(newItem)} />
            <Checkbox
              checked={shiny}
              className={styles.checkbox}
              data-testid="shiny"
              label="Shiny"
              onChange={(e, data) => setShiny(data.checked)}
            />
          </div>
        </details>
        <details className={styles.expandable}>
          <summary data-testid="move-summary">Moves</summary>
          <div className={styles.expandable}>
            <div data-testid="move-1">
              <span>Move 1:</span>
              <MoveSelector
                currentMoveId={moveOne}
                handleMove={(moveId: number) => setMoveOne(moveId)}
              />
            </div>
            <div data-testid="move-2">
              <span>Move 2:</span>
              <MoveSelector
                currentMoveId={moveTwo}
                handleMove={(moveId: number) => setMoveTwo(moveId)}
              />
            </div>
            <div data-testid="move-3">
              <span>Move 3:</span>
              <MoveSelector
                currentMoveId={moveThree}
                handleMove={(moveId: number) => setMoveThree(moveId)}
              />
            </div>
            <div data-testid="move-4">
              <span>Move 4:</span>
              <MoveSelector
                currentMoveId={moveFour}
                handleMove={(moveId: number) => setMoveFour(moveId)}
              />
            </div>
          </div>
        </details>
        {encounter?.status?.value === 2 && (
          <label>
            <div>{t('cause_of_fainting')}:</div>
            <textarea
              className={styles.textarea}
              data-testid="cause of fainting"
              maxLength={250}
              onChange={(e) => setFaint(e.target.value)}
              rows={5}
              value={faint}
            />
          </label>
        )}
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={handleClose}>{t('cancel', { ns: 'common' })}</Button>
        <Button onClick={handleExport}>{t('export_to_builder')}</Button>
        <Dropdown
          button
          data-testid="export-to-game"
          onChange={(e, data) => handleGameExport(data.value as string)}
          options={gamesList}
          text={t('export_to_game')}
          value={selectedGame?.value}
        />
        <Button onClick={handleSave} primary>
          {t('save', { ns: 'common' })}
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

export default Detail;