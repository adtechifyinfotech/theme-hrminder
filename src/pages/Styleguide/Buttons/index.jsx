import { HMButton } from "@/components";
import { Icons } from "@/constants";
import { useTitle } from "@/App";
import styles from "../Styleguide.module.css";

export const Buttons = () => {
  const { setHeaderText } = useTitle();
  setHeaderText("Buttons");
  return (
    <>
      <div className={styles.cardButton}>
        <h2 className="mb-4">Primary Button</h2>
        <HMButton variant={"primary"}>Primary Button</HMButton>
      </div>
      <div className={styles.cardButton}>
        <h2 className="mb-4">Only Icon Button</h2>
        <HMButton variant={"primary"} icon={Icons.Settings} />
      </div>
      <div className={styles.cardButton}>
        <h2 className="mb-4">Default Button</h2>
        <HMButton variant={"default"}>Default Button</HMButton>
      </div>
      <div className={styles.cardButton}>
        <h2 className="mb-4">Dashed Button</h2>
        <HMButton variant={"dashed"}>Dashed Button</HMButton>
      </div>
      <div className={styles.cardButton}>
        <h2 className="mb-4">Text Button</h2>
        <HMButton variant={"text"}>Text Button</HMButton>
      </div>
      <div className={styles.cardButton}>
        <h2 className="mb-4">Danger Button</h2>
        <HMButton danger>Danger Button</HMButton>
      </div>
      <div className={styles.cardButton}>
        <h2 className="mb-4">With Icons Start</h2>
        <HMButton variant={"primary"} icon={Icons.Settings}>
          With Icons Start
        </HMButton>
      </div>
      <div className={styles.cardButton}>
        <h2 className="mb-4">With Icons End</h2>
        <HMButton
          variant={"primary"}
          iconPosition={"end"}
          icon={Icons.Settings}
        >
          With Icons End
        </HMButton>
      </div>
      <div className={styles.cardButton}>
        <h2 className="mb-4">Disabled Icons End</h2>
        <div className="d-flex gap-4">
          <HMButton disabled variant={"primary"}>
            Primary Button disabled
          </HMButton>
        </div>
      </div>
    </>
  );
};

