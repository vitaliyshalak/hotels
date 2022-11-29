import { render, screen } from '@testing-library/react';

import { Modal } from './Modal';

describe('Modal component', () => {
  it('should not be visible', () => {
    render(<Modal open={false} onClose={() => {}} />);
    expect(screen.queryByTestId('modal')).toBeNull();
  });

  it('should be visible and contain children', () => {
    const children = 'Modal content';

    render(
      <Modal open={true} onClose={() => {}}>
        {children}
      </Modal>
    );

    expect(screen.getByTestId('modal')).toBeVisible();
    expect(screen.getByText(children)).toBeInTheDocument();
  });
});
