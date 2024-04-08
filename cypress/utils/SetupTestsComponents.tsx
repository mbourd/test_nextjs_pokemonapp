import * as React from 'react';
import { ThirdPartySoftwareProvider } from '../../providers/ThirdPartySoftwareProvider';

type SetupTestsComponentProps = {
  //
};

const SetupTestsComponents: React.FC<
  React.PropsWithChildren<SetupTestsComponentProps>
> = ({ children }) => {
  const content = (
    <ThirdPartySoftwareProvider>
      <main id="main-content">{children}</main>
    </ThirdPartySoftwareProvider>
  );

  return <>{content};</>;
};

export { SetupTestsComponents };
