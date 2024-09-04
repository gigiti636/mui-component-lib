import Modal from './index';
import { Box } from '@mui/material';
import PropTypes from 'prop-types';

export default {
  title: 'Wrappers/Modal',
  component: Modal,
  argTypes: {
    open: { control: 'boolean', description: 'toggle modal visibility' },
    maxWidth: {
      control: 'number',
      validation: {
        min: 0,
        message: 'Max width must be a positive number.',
      },
    },
    header: { control: 'text' },
    action: { control: 'text' },
    cancelActionLabel: { control: 'text' },
    callToActionIsDelete: { control: 'boolean' },
    disabled: { control: 'boolean' },
    children: { control: 'text' },
    callToActionHidden: { control: 'boolean' },
  },
};

const Template = ({
  open,
  header,
  maxWidth,
  action,
  cancelActionLabel,
  callToActionIsDelete,
  disabled,
  children,
  callToActionHidden,
}) => {
  return (
    <Box height={'70vh'}>
      <Modal
        maxWidth={maxWidth}
        open={open}
        header={header}
        action={action}
        cancelActionLabel={cancelActionLabel}
        //eslint-disable-next-line no-undef
        callToAction={() => alert('Call to action')}
        //eslint-disable-next-line no-undef
        cancelAction={() => alert('Call to action')}
        //eslint-disable-next-line no-undef
        closeModal={() => alert('Call to action')}
        callToActionIsDelete={callToActionIsDelete}
        disabled={disabled}
        callToActionHidden={callToActionHidden}
      >
        {children}
      </Modal>
    </Box>
  );
};

Template.propTypes = {
  open: PropTypes.bool.isRequired,
  header: PropTypes.string.isRequired,
  action: PropTypes.string.isRequired,
  cancelActionLabel: PropTypes.string.isRequired,
  callToActionIsDelete: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
  callToActionHidden: PropTypes.bool,
  maxWidth: PropTypes.number.isRequired,
};

export const Default = Template.bind({});
Default.args = {
  open: true,
  maxWidth: 900,
  header: 'Modal header',
  action: 'Action label',
  cancelActionLabel: 'Cancel label',
  callToActionIsDelete: false,
  disabled: false,
  children: 'This is modal content. The modal is always rendered in the center of the page.',
  callToActionHidden: false,
};
