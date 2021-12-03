import React from 'react';
import { ControlDill } from '@design';
import { DragDataKey } from 'common/typing';
import 'control-list/index.scss';

const { CONTROL_MOVE_TYPE, CONTROL_TYPE, CREATE } = DragDataKey;

function onDragStart(evt, type) {
  evt.stopPropagation();
  evt.dataTransfer.clearData();
  evt.dataTransfer.setData(CONTROL_TYPE, type);
  evt.dataTransfer.setData(CONTROL_MOVE_TYPE, CREATE);
}

function renderControl(controls) {
  return controls.map(control => {
    const { type, name } = control;
    return <span key={type} draggable onDragStart={e => onDragStart(e, type)}>{name}</span>;
  });
}

export default function ControlList() {
  /**
   * 从组件库中获取组件列表并渲染
   * @returns JSX
   */
  function renderList() {
    return ControlDill.map(list => {
      const { name, controls } = list;
      return (
        <div className="control-list-each" key={name}>
          <div className="title">{name}</div>
          <div className="control-list-each-row">
            {renderControl(controls)}
          </div>
        </div>
      );
    });
  }

  return (
    <div className="control-list-content">
      {renderList()}
    </div>
  );
}
