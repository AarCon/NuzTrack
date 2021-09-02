import React, { useCallback, useState } from 'react';
import { FixedSizeList, ListChildComponentProps as RowProps } from 'react-window';
import useStore from 'store';
import Button from 'semantic-ui-react/dist/commonjs/elements/Button';
import Icon from 'semantic-ui-react/dist/commonjs/elements/Icon';
import Modal from 'semantic-ui-react/dist/commonjs/modules/Modal';
import MOVES from 'constants/moves';
import { PHYS_SPEC_SPLIT } from 'constants/constant';
import useFilter from 'hooks/useFilter';
import { Filter, Move } from 'components';
import styles from './MoveSelector.module.scss';

interface MoveSelectorProps {
  currentMoveId: number;
  handleMove: (moveId: number) => void;
}

const MoveSelector: React.FC<MoveSelectorProps> = ({ currentMoveId, handleMove }) => {
  const [open, setOpen] = useState(false);
  const values = useFilter();
  const selectedGame = useStore(useCallback((state) => state.selectedGame, []));
  const isSplit = !PHYS_SPEC_SPLIT.includes(selectedGame?.value);
  const currentMove = MOVES.find((m) => m.id === currentMoveId);
  const filteredMoves = MOVES.filter(
    (m) =>
      m.name.toUpperCase().includes(values.search) &&
      (values.gens.length > 0 ? values.gens.includes(m.gen) : true) &&
      (values.types.length > 0 ? values.types.includes(m.type) : true)
  );

  const handleClick = (moveId: number) => {
    handleMove(moveId);
    setOpen(false);
  };

  const handleClear = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    handleMove(null);
  };

  const renderRow: React.FC<RowProps> = ({ index, style }) => {
    const move = filteredMoves[index];
    return (
      <div style={style}>
        <div
          className={styles.row}
          data-testid={`move-${move.name}`}
          onClick={() => handleClick(move.id)}
          role="presentation"
        >
          <Move moveDetail={move} showStatus={isSplit} />
        </div>
      </div>
    );
  };

  return (
    <Modal
      closeOnDimmerClick
      open={open}
      trigger={
        currentMoveId ? (
          <div onClick={() => setOpen(true)} role="presentation" className={styles.currentMove}>
            <Move moveDetail={currentMove} showStatus={isSplit} />
            <Button
              basic
              className={styles.trash}
              compact
              icon="trash"
              name="trash"
              onClick={handleClear}
            />
          </div>
        ) : (
          <div className={styles.selector} onClick={() => setOpen(true)} role="presentation">
            <b>Select a move...</b> <Icon name="hand pointer outline" />
          </div>
        )
      }
    >
      <Modal.Content className={styles.content}>
        <Filter values={values} />
        <FixedSizeList height={400} itemCount={filteredMoves.length} itemSize={40} width="100%">
          {renderRow}
        </FixedSizeList>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setOpen(false)}>Close</Button>
      </Modal.Actions>
    </Modal>
  );
};

export default MoveSelector;