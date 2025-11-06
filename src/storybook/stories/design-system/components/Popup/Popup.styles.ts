import styled from "@emotion/native";

export const Overlay = styled.View({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(255, 255, 255, 0.3)",
  justifyContent: "center",
  alignItems: "center",
});

export const Container = styled.View(({ theme }) => ({
  width: 300,
  backgroundColor: theme.colors.Neutral.WHITE,
  borderRadius: 28,
  paddingVertical: theme.space.M,
  paddingHorizontal: theme.space.XL,
  alignItems: "center",
  // iOS Shadow
  shadowColor: "#000000",
  shadowOffset: { width: 0, height: 0 },
  shadowOpacity: 0.15,
  shadowRadius: 24,
  // Android Shadow
  elevation: 8,
}));

export const Icon = styled.Image({
  width: 60,
  height: 60,
  marginBottom: 10,
});

export const MainText = styled.Text(({ theme }) => ({
  ...theme.typography.Head3_2,
  color: theme.colors.Neutral.N80,
  fontWeight: "600",
  marginBottom: 4,
}));

export const SubText = styled.Text(({ theme }) => ({
  ...theme.typography.Body2_1,
  color: theme.colors.Neutral.N40,
  marginBottom: theme.space.L,
}));

export const ButtonRow = styled.View({
  flexDirection: "row",
  justifyContent: "center",
  gap: 15,
  width: "100%",
});

export const ConfirmButton = styled.TouchableOpacity(({ theme }) => ({
  flex: 1,
  backgroundColor: theme.colors.Neutral.N50,
  borderRadius: theme.radius.L,
  paddingVertical: 10,
  alignItems: "center",
}));

export const CancelButton = styled.TouchableOpacity(({ theme }) => ({
  flex: 1,
  backgroundColor: theme.colors.Neutral.N10,
  borderRadius: theme.radius.L,
  paddingVertical: 10,
  alignItems: "center",
}));

export const ButtonText = styled.Text(({ theme }) => ({
  ...theme.typography.Small1_1,
  fontWeight: "600",
  color: theme.colors.Neutral.WHITE,
}));

export const CancelText = styled(ButtonText)(({ theme }) => ({
  color: theme.colors.Neutral.N70,
}));
